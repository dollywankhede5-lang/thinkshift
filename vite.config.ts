import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { IncomingMessage, ServerResponse } from 'http';

// Helper to read JSON request body in Node HTTP middleware
function parseJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

// Vite plugin to provide secure /api routes without exposing GEMINI_API_KEY to browser
function geminiApiProxyPlugin(apiKeyFromEnv: string) {
  return {
    name: 'gemini-api-proxy',
    configureServer(server: any) {
      server.middlewares.use(async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        const url = new URL(req.url, 'http://localhost:5173');
        const apiKey = (req.headers['x-gemini-api-key'] as string) || apiKeyFromEnv || process.env.GEMINI_API_KEY;

        res.setHeader('Content-Type', 'application/json');

        // Health / config check
        if (url.pathname === '/api/health') {
          res.statusCode = 200;
          return res.end(JSON.stringify({
            status: 'ok',
            hasEnvKey: Boolean(apiKeyFromEnv || process.env.GEMINI_API_KEY),
            timestamp: new Date().toISOString()
          }));
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
        }

        if (!apiKey) {
          res.statusCode = 401;
          return res.end(JSON.stringify({
            error: 'GEMINI_API_KEY is not configured on the server or provided in request headers.',
            code: 'NO_API_KEY'
          }));
        }

        try {
          const body = await parseJsonBody(req);

          const requestedModel = body.model;
          const candidateModels = requestedModel 
            ? [requestedModel, 'gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.1-flash-lite']
            : ['gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.1-flash-lite'];

          const contents = body.contents;
          const generationConfig = body.generationConfig || {
            temperature: 0.4,
            topP: 0.95,
            responseMimeType: body.responseMimeType || 'application/json'
          };
          const systemInstruction = body.systemInstruction;

          const payload: any = {
            contents,
            generationConfig
          };

          if (systemInstruction) {
            payload.systemInstruction = {
              parts: [{ text: systemInstruction }]
            };
          }

          let lastError: any = null;
          let successData: any = null;

          // Cascade through candidate models in case of 503 high demand or 404
          for (const model of candidateModels) {
            try {
              const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
              const geminiRes = await fetch(geminiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              });

              const geminiData = await geminiRes.json();

              if (geminiRes.ok) {
                successData = geminiData;
                break;
              }

              lastError = geminiData.error?.message || `HTTP ${geminiRes.status}`;
              console.warn(`[Proxy Fallback]: Model ${model} returned ${geminiRes.status} (${lastError}), trying next candidate...`);
            } catch (err: any) {
              lastError = err.message;
            }
          }

          if (successData) {
            res.statusCode = 200;
            return res.end(JSON.stringify(successData));
          }

          res.statusCode = 503;
          return res.end(JSON.stringify({
            error: lastError || 'All Gemini model candidates failed',
            details: lastError
          }));
        } catch (error: any) {
          console.error('[API Proxy Error]:', error);
          res.statusCode = 500;
          return res.end(JSON.stringify({
            error: error.message || 'Internal proxy error',
            code: 'PROXY_ERROR'
          }));
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

  return {
    plugins: [
      react(),
      geminiApiProxyPlugin(apiKey)
    ],
    server: {
      port: 5173,
      host: true
    }
  };
});

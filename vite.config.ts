import { defineConfig, ServerOptions } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

interface CustomServerOptions extends ServerOptions {
  setup?: (app: any) => void;
}

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: true,
    setup: (app) => {
      app.use((req: any, res: any, next: any) => {
        res.setHeader("ngrok-skip-browser-warning", "true");
        next();
      });
    },
  } as CustomServerOptions,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

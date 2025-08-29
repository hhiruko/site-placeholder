import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    esbuild: {
      jsx: 'automatic',
      jsxImportSource: 'preact',
    },
  });
};
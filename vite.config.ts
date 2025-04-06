import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { federation } from '@module-federation/vite';
import dotenv from 'dotenv';
import { visualizer } from 'rollup-plugin-visualizer';

dotenv.config();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      federation({
        name: 'ccxcoreui',
        filename: 'remoteEntry.js',
        exposes: {
          './formatDate': './src/utils/formatDate',
          './MyButton': './src/components/MyButton'
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^19.1.0'
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^19.1.0'
          }
        }
      }),
      mode === 'production' &&
        visualizer({
          filename: 'bundle-report.html',
          open: false
        })
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src')
      }
    },
    server: {
      port: Number(env.VITE_APP_SERVER_PORT) || 3000,
      open: true,
      cors: {
        origin: '*'
      }
    },
    build: {
      outDir: mode === 'production' ? `dist/${process.env.npm_package_name}` : 'dist',
      sourcemap: true,
      minify: mode === 'production',
      cssMinify: mode === 'production',
      rollupOptions: {
        output: {
          manualChunks:
            mode === 'production'
              ? {
                  vendor: ['react', 'react-dom', 'react-redux']
                }
              : undefined,
          entryFileNames: mode === 'production' ? 'assets/js/[name].[hash].js' : '[name].js',
          chunkFileNames:
            mode === 'production' ? 'assets/js/[name].[hash].chunk.js' : 'scripts/[name].chunk.js',
          assetFileNames:
            mode === 'production' ? 'assets/[ext]/[name].[hash].[ext]' : '[name].[ext]'
        }
      },
      assetsDir: mode === 'production' ? 'assets' : '',
      emptyOutDir: true,
      target: 'esnext'
    }
  };
});

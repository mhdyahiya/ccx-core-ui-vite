import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';
import compression from 'vite-plugin-compression';

export default defineConfig(configEnv => {
  const baseConfigResult = baseConfig({ ...configEnv, mode: 'production' });

  return mergeConfig(baseConfigResult, {
    mode: 'production',
    plugins: [compression()],
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.REACT_APP_PUBLIC_PATH': JSON.stringify(process.env.REACT_APP_PUBLIC_PATH || '/')
    }
  });
});

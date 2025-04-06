import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';

export default defineConfig(configEnv => {
  const baseConfigResult = baseConfig(configEnv);

  return mergeConfig(baseConfigResult, {
    mode: 'development',
    build: {
      minify: false
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify('development')
    }
  });
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/uni-schedule/',
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, 'src/components'),
      '#data': path.resolve(__dirname, 'src/data'),
    }
  }
});

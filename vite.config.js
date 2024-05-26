import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs', // 将输出目录设置为'docs'
  },
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 3000, // 指定端口，如果默认端口被占用可以修改
  },
})

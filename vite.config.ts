import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@locales': resolve(__dirname, 'src/locales')
    }
  },
  base: './',  // 修改为相对路径
  // build: {
  //   assetsDir: 'assets',
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: 'assets/[name].[hash][extname]',
  //       chunkFileNames: 'assets/[name].[hash].js',
  //       entryFileNames: 'assets/[name].[hash].js'
  //     }
  //   },
  //   // 添加字体文件处理
  // }
})

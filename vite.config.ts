import { resolve, dirname, join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactPDFViewer',
      fileName: 'react-pdf-viewer',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  server: {
    open: '/examples/index.html',
  },
  plugins: [
    react(),
    eslint({
      extensions: ['js', 'ts', 'tsx'],
      exclude: ['/node_modules/'],
      emitError: true,
      emitWarning: true,
      failOnError: true,
      fix: false,
    }),
  ],
})

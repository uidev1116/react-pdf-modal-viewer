import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactPDFModalViewer',
      fileName: 'react-pdf-modal-viewer',
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
  plugins: [
    react(),
    eslint({
      extensions: ['js', 'ts', 'tsx'],
      exclude: ['**/node_modules/**'],
      emitError: true,
      emitWarning: true,
      failOnError: false,
      fix: true,
    }),
    stylelint({
      include: ['scss/*.scss'],
      emitError: true,
      emitWarning: true,
      fix: true,
    }),
  ],
})

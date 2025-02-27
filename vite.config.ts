import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['effector/babel-plugin'],
        babelrc: true,
        configFile: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
})

import { defineConfig } from 'vite'
import { REPO_NAME } from './config.js'

export default defineConfig(({ mode }) => {
    const isDev = mode === 'development'
    return {
        root: './src',
        base: isDev ? '/' : `/frontend25-26/${REPO_NAME}/`,
        server: {
            open: true,
            port: 3030,
        },
        build: {
            outDir: '../dist',
            emptyOutDir: true,
        },
    }
})

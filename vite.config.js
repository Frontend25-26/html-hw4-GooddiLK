import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => {
    const isDev = mode === 'development'

    return {
        root: './src',
        base: isDev ? '/' : './',
        publicDir: false,
        server: {
            open: true,
            port: 3030,
        },
        build: {
            outDir: 'dist',
            emptyOutDir: true,
            rollupOptions: {
                input: './src/index.html',
            },
        },
        plugins: [
            tailwindcss(),
            viteStaticCopy({
                targets: [
                    { src: 'style.css', dest: '.' },
                    { src: 'scss-compile.css', dest: '.' },
                    { src: 'internal/images', dest: 'internal' },
                    { src: 'internal/Gabriela', dest: 'internal' },
                ],
            }),
        ],
    }
})

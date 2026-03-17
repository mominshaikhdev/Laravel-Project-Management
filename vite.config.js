import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const plugins = [
    laravel({
        input: ['resources/css/app.css', 'resources/js/app.jsx'],
        ssr: 'resources/js/ssr.jsx',
        refresh: true,
    }),
    react({
        babel: {
            plugins: ['babel-plugin-react-compiler'],
        },
    }),
    tailwindcss(),
];

if (process.env.NODE_ENV !== 'production') {
    plugins.push(
        wayfinder({
            formVariants: true,
            generateTypes: true,
        })
    );
}

export default defineConfig({
    plugins,
    esbuild: {
        jsx: 'automatic',
    },
});

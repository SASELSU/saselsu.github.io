import { defineConfig, type UserConfig } from "vite";

import react from "@vitejs/plugin-react";
import devtoolsJson from "vite-plugin-devtools-json";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ mode }) => {
    const isDev = mode === "development";
    const plugins: UserConfig["plugins"] = [
        react()
    ];

    plugins.push(isDev
        ? devtoolsJson()
        : ViteImageOptimizer({ logStats: true })
    );

    return {
        build: {
            target: "baseline-widely-available",
            chunkSizeWarningLimit: 2000,
            cssMinify: "lightningcss"
        },

        server: {
            port: 3000,
            strictPort: true,
            host: "0.0.0.0"
        },

        preview: {
            port: 3000,
            strictPort: true,
            host: "0.0.0.0"
        },

        css: {
            devSourcemap: isDev
        },

        json: {
            stringify: true
        },

        plugins,

        logLevel: isDev ? "info" : "warn",
        clearScreen: false
    };
});

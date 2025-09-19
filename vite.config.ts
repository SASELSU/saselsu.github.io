import { defineConfig, type UserConfig } from "vite";

import { reactRouter } from "@react-router/dev/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ command, mode }) => {
    const isDev = mode === "development";
    const plugins: UserConfig["plugins"] = [
        reactRouter()
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

        /**
         * Workaround for missing `renderToPipeableStream` export.
         * @link https://github.com/remix-run/react-router/issues/12568
         */
        resolve: command === "build"
            ? {
                alias: {
                    "react-dom/server": "react-dom/server.node"
                }
            }
            : undefined,

        plugins,

        logLevel: isDev ? "info" : "warn",
        clearScreen: false
    };
});

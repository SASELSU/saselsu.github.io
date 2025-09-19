import { useEffect, type ReactNode } from "react";
import ReactGA from "react-ga4";
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import type { Route } from "./+types/root";

import "@fontsource/bebas-neue"; // Defaults to weight 400
import "@fontsource/red-hat-display"; // Defaults to weight 400
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/adlam-display"; // Defaults to weight 400

import "./index.css";

/**
 * Head links.
 */
export function links (): ReturnType<Route.LinksFunction> {
    return [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/logo192.png" },
        { rel: "manifest", href: "/manifest.json" }
    ] satisfies ReturnType<Route.LinksFunction>;
}

/**
 * App layout.
 * @returns
 */
export function Layout ({ children }: { children: ReactNode }): ReactNode {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="description" content="Welcome to the SASE@LSU website!" />
                <meta name="theme-color" content="#000000" />

                <meta property="og:title" content="SASE LSU" />
                <meta property="og:description" content="Welcome to the SASE@LSU website!" />
                <meta property="og:url" content="www.saselsu.org" />

                <Meta />
                <Links />

                <title>SASE LSU</title>
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
};

/**
 * Error layout.
 */
export function ErrorBoundary ({ error }: Route.ErrorBoundaryProps): ReactNode {
    let title = "Oops!";
    let desc = "An error occurred.";
    let stack: string | null = null;

    if (isRouteErrorResponse(error)) {
        title = String(error.status);
        desc = error.statusText;
    } else if (error instanceof Error) {
        desc = error.message;
        stack = error.stack ?? "";
    }

    return (
        <main>
            <h1>{title}</h1>
            <p>{desc}</p>
            {stack && (
                <pre>
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}

/**
 * App view.
 */
export default function App (): ReactNode {
    useEffect(() => {
        if (import.meta.env.VITE_REACT_APP_GA_ID) {
            ReactGA.initialize(import.meta.env.VITE_REACT_APP_GA_ID);
            ReactGA.send({
                hitType: "pageview",
                page: "/",
                title: "Landing Page"
            });
        }
    });

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

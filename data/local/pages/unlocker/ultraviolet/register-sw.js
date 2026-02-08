/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */

// Point directly to the root where the file should be moved
const stockSW = "/uv-sw.js";/**
/**
 * List of hostnames allowed to run serviceworkers on http
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global registration utility
 */
async function registerSW() {
    if (
        location.protocol !== "https:" &&
        !swAllowedHostnames.includes(location.hostname)
    )
        throw new Error("Service workers cannot be registered without https.");

if ('serviceWorker' in navigator) {
    // We register the root file, but tell it to watch the WHOLE site
    navigator.serviceWorker.register('/uv-sw.js', {
        scope: __uv$config.prefix // This ensures it watches the '/s/' path
    }).then(() => {
        console.log("Service Worker Registered to Scope:", __uv$config.prefix);
    });
}
    // Registering from the root fixes the "Max Scope Allowed" security error
    await navigator.serviceWorker.register(stockSW, {
        scope: __uv$config.prefix,
    });
}

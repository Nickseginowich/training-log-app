const CACHE_VERSION = "2026-07-14-posture-replacement";
const CACHE_NAME = `training-log-${CACHE_VERSION}`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icons/icon-180.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/mobility/01-hip-lift-native.png",
  "./assets/mobility/02-hip-flexor-native.png",
  "./assets/mobility/03-dead-bug-native.png",
  "./assets/mobility/04-glute-bridge-native.png",
  "./assets/mobility/05-wall-slides-native.png",
  "./assets/mobility/06-adductor-rockback-native.png",
  "./assets/mobility/07-open-book-native.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL.map((url) => new Request(url, { cache: "reload" }))))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith("training-log-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => clients.forEach((client) => client.postMessage({ type: "APP_READY", version: CACHE_VERSION })))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(handleNavigation(event.request));
    return;
  }

  event.respondWith(handleAsset(event.request));
});

async function handleNavigation(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const fresh = await fetch(request);
    await cache.put("./index.html", fresh.clone());
    return fresh;
  } catch {
    return (await cache.match("./index.html")) || (await cache.match("./"));
  }
}

async function handleAsset(request) {
  const cached = await caches.match(request);
  if (cached) {
    refreshAsset(request);
    return cached;
  }

  try {
    const fresh = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, fresh.clone());
    return fresh;
  } catch {
    return cached;
  }
}

async function refreshAsset(request) {
  try {
    const fresh = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, fresh);
  } catch {
    // Offline is expected; keep serving the cached asset.
  }
}


    const assets = [
  "/index.html",
  "/img/smoki.PNG",
  "/img/misti.PNG",
  "/img/marta.PNG",
  "/favicons/yandex-browser-manifest.json",
  "/favicons/yandex-browser-50x50.png",
  "/favicons/mstile-70x70.png",
  "/favicons/mstile-310x310.png",
  "/favicons/mstile-310x150.png",
  "/favicons/mstile-150x150.png",
  "/favicons/mstile-144x144.png",
  "/favicons/manifest.webmanifest",
  "/favicons/icon.svg",
  "/favicons/favicon.ico",
  "/favicons/favicon-48x48.png",
  "/favicons/favicon-32x32.png",
  "/favicons/favicon-16x16.png",
  "/favicons/browserconfig.xml",
  "/favicons/apple-touch-startup-image-828x1792.png",
  "/favicons/apple-touch-startup-image-750x1334.png",
  "/favicons/apple-touch-startup-image-640x1136.png",
  "/favicons/apple-touch-startup-image-2796x1290.png",
  "/favicons/apple-touch-startup-image-2778x1284.png",
  "/favicons/apple-touch-startup-image-2732x2048.png",
  "/favicons/apple-touch-startup-image-2688x1242.png",
  "/favicons/apple-touch-startup-image-2556x1179.png",
  "/favicons/apple-touch-startup-image-2532x1170.png",
  "/favicons/apple-touch-startup-image-2436x1125.png",
  "/favicons/apple-touch-startup-image-2388x1668.png",
  "/favicons/apple-touch-startup-image-2266x1488.png",
  "/favicons/apple-touch-startup-image-2224x1668.png",
  "/favicons/apple-touch-startup-image-2208x1242.png",
  "/favicons/apple-touch-startup-image-2160x1640.png",
  "/favicons/apple-touch-startup-image-2160x1620.png",
  "/favicons/apple-touch-startup-image-2048x2732.png",
  "/favicons/apple-touch-startup-image-2048x1536.png",
  "/favicons/apple-touch-startup-image-1792x828.png",
  "/favicons/apple-touch-startup-image-1668x2388.png",
  "/favicons/apple-touch-startup-image-1668x2224.png",
  "/favicons/apple-touch-startup-image-1640x2160.png",
  "/favicons/apple-touch-startup-image-1620x2160.png",
  "/favicons/apple-touch-startup-image-1536x2048.png",
  "/favicons/apple-touch-startup-image-1488x2266.png",
  "/favicons/apple-touch-startup-image-1334x750.png",
  "/favicons/apple-touch-startup-image-1290x2796.png",
  "/favicons/apple-touch-startup-image-1284x2778.png",
  "/favicons/apple-touch-startup-image-1242x2688.png",
  "/favicons/apple-touch-startup-image-1242x2208.png",
  "/favicons/apple-touch-startup-image-1179x2556.png",
  "/favicons/apple-touch-startup-image-1170x2532.png",
  "/favicons/apple-touch-startup-image-1136x640.png",
  "/favicons/apple-touch-startup-image-1125x2436.png",
  "/favicons/apple-touch-icon.png",
  "/favicons/apple-touch-icon-precomposed.png",
  "/favicons/apple-touch-icon-76x76.png",
  "/favicons/apple-touch-icon-72x72.png",
  "/favicons/apple-touch-icon-60x60.png",
  "/favicons/apple-touch-icon-57x57.png",
  "/favicons/apple-touch-icon-180x180.png",
  "/favicons/apple-touch-icon-167x167.png",
  "/favicons/apple-touch-icon-152x152.png",
  "/favicons/apple-touch-icon-144x144.png",
  "/favicons/apple-touch-icon-120x120.png",
  "/favicons/apple-touch-icon-114x114.png",
  "/favicons/apple-touch-icon-1024x1024.png",
  "/favicons/android-chrome-96x96.png",
  "/favicons/android-chrome-72x72.png",
  "/favicons/android-chrome-512x512.png",
  "/favicons/android-chrome-48x48.png",
  "/favicons/android-chrome-384x384.png",
  "/favicons/android-chrome-36x36.png",
  "/favicons/android-chrome-256x256.png",
  "/favicons/android-chrome-192x192.png",
  "/favicons/android-chrome-144x144.png",
  "/cdn/water.system.min.css",
  "/cdn/water.light.min.css",
  "/cdn/water.dark.min.css",
  "/assets/index-iFxFCxMZ.css",
  "/assets/index-B6YWJoDa.js",
  "/"
];
    const CACHE_NAME = 'v2025-08-29T11:06:08.706Z';

    self.addEventListener('install', event => {
        self.skipWaiting();
        event.waitUntil(
            caches.open(CACHE_NAME).then(async cache => {
                for(const asset of assets) {
                    try {
                        await cache.add(asset);
                    } catch (e) {
                        console.error('❌ Failed to cache:', asset, e);
                    }
                }
            })
        );
    });

    self.addEventListener('fetch', event => {
        event.respondWith(
            caches.match(event.request).then(response => {
                if(response) return response;
                return fetch(event.request).catch(() => {
                    if(event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });
            })
        );
    });

    self.addEventListener('activate', event => {
        self.clients.claim();
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
    });

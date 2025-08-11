// Minimal service worker to cache app shell and last wallpaper
const CACHE_NAME = 'startpage-cache-v1';
const APP_SHELL = [
  './',
  './index.html',
  './background.gif',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests and images, fall back to network otherwise
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request).then((resp) => {
          // Cache images and the app shell
          if (resp.ok && (request.destination === 'image' || request.mode === 'navigate')) {
            const respClone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, respClone));
          }
          return resp;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
  }
});

const cacheName = 'portfolio-liquid-v2';
const assets = [
  './',
  './index.html',
  './icon.png',
  './profile.png'
];

// Install event: Caches the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event: Serve from cache if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
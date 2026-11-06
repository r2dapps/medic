// @ts-nocheck
/// <reference lib="webworker" />
// MEDIC Service Worker - Offline-First Health App Shell Cache
const CACHE_NAME = 'medic-pwa-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './src/app.js',
  './favicon.svg',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: Cache core static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Purge stale caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-First with Cache Fallback for HTML/data, Cache-First for static assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests or browser extension schemes
  if (req.method !== 'GET' || !url.protocol.startsWith('http')) return;

  event.respondWith(
    fetch(req)
      .then((networkRes) => {
        // If valid network response, clone into cache for offline use
        if (networkRes && networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, resClone);
          });
        }
        return networkRes;
      })
      .catch(() => {
        // Offline fallback: serve from cache
        return caches.match(req).then((cachedRes) => {
          if (cachedRes) return cachedRes;
          // If request was for a navigation, return index.html
          if (req.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
          return new Response('Offline: MEDIC is running in offline mode.', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain' })
          });
        });
      })
  );
});

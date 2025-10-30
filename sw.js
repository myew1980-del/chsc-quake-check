// sw.js v3 - 強制轉發所有請求到網路
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => new Response("offline")));
});

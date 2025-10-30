// sw.js
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());

// 這段很關鍵：把所有請求直接轉發到網路（包含跨網域的 POST 到 GAS）
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

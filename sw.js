// sw.js  v2
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());

// 關鍵：任何請求（含跨網域的 fetch 到 GAS）都直接轉發到網路，並把回應回傳給頁面
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

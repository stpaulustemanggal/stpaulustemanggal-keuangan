// Service worker minimal — cuma supaya kriteria "installable" Chrome/Android
// terpenuhi. Tidak melakukan caching apa pun; semua request tetap jalan
// normal ke jaringan (app datanya live dari Google Apps Script/Spreadsheet,
// jadi sengaja TIDAK di-cache offline).
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // no-op — biarkan browser menangani fetch seperti biasa.
});

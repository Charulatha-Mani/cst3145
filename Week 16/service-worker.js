var cacheName = 'petdepot-v1';
var cacheFiles = [
    'checkout.html',
    'products.js',
    'petdepot.webmanifest',
    'images/catfood.jpg',
    'images/cathouse.jpg',
    'images/chickenfeed.jpg',
    'images/doghouse.jpg',
    'images/dogfood.jpg',
    'images/pet.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});
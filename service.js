
self.addEventListener('install', function (ev) {
    console.log('install');
});
self.addEventListener('activate', function (ev) {
    console.log('activate');
});
self.addEventListener('fetch', function (ev) {
    console.log('fetch');
});

self.addEventListener('sync', function (ev) {
    console.log('sync');
});

self.addEventListener('push', function (ev) {
    console.log('push');
});
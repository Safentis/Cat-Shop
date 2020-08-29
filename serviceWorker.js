self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                './', './css/style.css', './js/index.js',
                // './images/background-app.jpg',
                // './images/cat.png',
                // './images/default-back.png',
                // './images/dezenable-back.png',
                // './images/hover-default-back.png',
                // './images/hover-selected-back.png',
                // './images/selected-back.png',
                // './static/android-chrome-192x192.png',
                // './static/android-chrome-512x512.png',
                // './static/apple-touch-icon.png',
                // './static/browserconfig.xml',
                // './static/favicon.ico',
                // './static/favicon-16x16.png',
                // './static/favicon-32x32.png',
                // './static/mstile-150x150.png',
                // './static/safari-pinned-tab.svg',
                // './fonts/Exo20-Thin.eot',
                // './fonts/Exo20-Thin.ttf',
                // './fonts/Exo20-Thin.woff',
                // './fonts/Exo20-ThinItalic.eot',
                // './fonts/Exo20-ThinItalic.ttf',
                // './fonts/Exo20-ThinItalic.woff',
                // './fonts/Trebuchet-BoldItalic.eot',
                // './fonts/Trebuchet-BoldItalic.ttf',
                // './fonts/Trebuchet-BoldItalic.woff',
                // './fonts/TrebuchetMS.eot',
                // './fonts/TrebuchetMS.ttf',
                // './fonts/TrebuchetMS.woff',
                // './fonts/TrebuchetMS-Bold.eot',
                // './fonts/TrebuchetMS-Bold.ttf',
                // './fonts/TrebuchetMS-Bold.woff',
                // './fonts/TrebuchetMS-Italic.eot',
                // './fonts/TrebuchetMS-Italic.ttf',
                // './fonts/TrebuchetMS-Italic.woff',
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});
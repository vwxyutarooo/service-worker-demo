const config = {
  version: '1.0.0',
  clientsClaim: false,
  skipWaiting: false
};


self.addEventListener('install', (event) => {
  console.log('on install');

  if (config.skipWaiting) {
    event.waitUntil(skipWaiting());
  }
});

self.addEventListener('activate', (event) => {
  console.log('on activate');

  if (config.clientsClaim) {
    event.waitUntil(self.clients.claim());
  }
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const requestPath = (config.version === '1.0.0') ? '/assets/img/lion.svg' : '/assets/img/fox.svg';

  console.log('on fetch', url);

  if (url.origin == location.origin && url.pathname.match(/\/panda\.svg/)) {
    event.respondWith(fetch(requestPath).then((response) => {
      return response;
    }));
  }
});

/// <reference lib="WebWorker" />

// export empty type because of tsc --isolatedModules flag

const cacheName = "::yourserviceworker";
const version = "v0.0.1";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(version + cacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(version) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;

  if (request.method !== "GET") {
    event.respondWith(
      fetch(request).catch(function () {
        return caches.match("/offline");
      })
    );
    return;
  }

  if (
    request.headers.get("Accept")?.indexOf("text/html") !== -1 &&
    request.url.startsWith(this.origin)
  ) {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          const copy = response.clone();
          caches.open(version + cacheName).then(function (cache) {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(function () {
          return caches.match(request).then(function (response) {
            return response || caches.match("/offline");
          });
        })
    );
    return;
  }

  if (
    request.headers.get("Accept")?.indexOf("text/plain") === -1 &&
    request.url.startsWith(this.origin)
  ) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request)
            .then(function (response) {
              const copy = response.clone();

              if (
                copy.headers.get("Content-Type")?.indexOf("text/plain") === -1
              ) {
                caches.open(version + cacheName).then(function (cache) {
                  cache.put(request, copy);
                });
              }
              return response;
            })
            .catch(function () {
              if (request.headers.get("Accept")?.indexOf("image") !== -1) {
              }
            })
        );
      })
    );
    return;
  }
});
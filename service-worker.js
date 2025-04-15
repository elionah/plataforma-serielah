self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open("serielah-cache").then(function(cache) {
        return cache.addAll([
          "index.html",
          "style.css",
          "script.js",
          "serielah.html",
          "diario.html",
          "selos.html",
          "livros.html",
          "mapa.html",
          "expansao.html",
          "codigo.html",
          "manifest.json",
          "icon.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
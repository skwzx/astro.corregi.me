// Service Worker vacío que se auto-desregistra
// Esto evita errores con extensiones de Chrome y otros problemas

self.addEventListener("install", function (event) {
  // Saltar la fase de espera y activar inmediatamente
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  // Auto-desregistrar este service worker
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll();
    })
    .then(function (clients) {
      // Notificar a todos los clientes que el service worker se ha desregistrado
      clients.forEach((client) => {
        client.navigate(client.url);
      });
    });
});

// No interceptar ninguna solicitud
self.addEventListener("fetch", function (event) {
  // Pasar todas las solicitudes directamente a la red
  return;
});

/**
 * @name isControlled
 * @url https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller
 */
export function isControlled() {
  const target = document.querySelector('#statusControlled');
  target.textContent = navigator.serviceWorker.controller ? 'control' : 'not control';
}


export function checkSWState(registration) {
  let serviceWorker;

  if (registration.installing) {
    serviceWorker = registration.installing;
    document.querySelector('#statusKind').textContent = 'installing';
  } else if (registration.waiting) {
    serviceWorker = registration.waiting;
    document.querySelector('#statusKind').textContent = 'waiting';
  } else if (registration.active) {
    serviceWorker = registration.active;
    document.querySelector('#statusKind').textContent = 'active';
  }

  return serviceWorker;
}

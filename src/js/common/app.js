import { fetchDemo } from './action';
import { pushSWState } from './util/app';
import { isControlled, checkSWState } from './util/sw';


if ('serviceWorker' in navigator) {
  isControlled();

  /**
   * @description ServiceWorkerContainer
   * @description { register, getRegistration, getRegistrations }
   * @url https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer
   */
  navigator.serviceWorker.register('/service-worker.js').then((registration) => {
    document.querySelector('#statusRegister').textContent = 'registered';
    console.log('registered');

    registration.update().then(() => {
      console.log('update');
    });

    const serviceWorker = checkSWState(registration);

    if (serviceWorker) {
      pushSWState(serviceWorker.state);
      serviceWorker.addEventListener('statechange', (event) => {
        pushSWState(event.target.state);
      });
    }

    registration.addEventListener('updatefound', (event) => {
      console.log('on updatefound', event);
    });
  });


  /**
   * @url https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready
   */
  navigator.serviceWorker.ready.then(() => {
    console.log('ready');
  });
}


navigator.serviceWorker.addEventListener('controllerchange', () => {
  console.log('on controllerchange');

  isControlled();
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#buttonFetch').addEventListener('click', () => {
    fetchDemo();
  });
});


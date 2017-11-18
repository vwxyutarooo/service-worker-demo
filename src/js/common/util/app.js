export function pushSWState(state) {
  const element = document.createElement('li');
  element.textContent = state;
  document.querySelector('#states').appendChild(element);
}


/**
 * @name fetchDemo
 */
export function fetchDemo() {
  const target = document.querySelector('#targetImage');
  const image = new Image();
  image.src = '/assets/img/panda.svg';

  target.appendChild(image);
}


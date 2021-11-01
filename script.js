const down = document.querySelector('.drop-down');
const dropContents = document.querySelector('.drop-contents');
const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.carousel-content');
const itemIndicatorContainer = document.querySelector(
  '.item-indicator-container'
);

down.addEventListener('mouseover', () => {
  dropContents.classList.remove('hide');
});

down.addEventListener('mouseleave', () => {
  dropContents.classList.add('hide');
});

dropContents.addEventListener('mouseleave', () => {
  dropContents.classList.add('hide');
});

let carouselArray = [0, 1, 2, 3, 4, 5, 6, 7];
let carouselDisplay = carouselArray.map((item, index) => ({
  item,
  index,
}));

function dom(element, attributes = {}, text, parent) {
  const elem = document.createElement(element);
  if (attributes) {
    Object.assign(elem, attributes);
  }
  if (text) {
    elem.innerText = text;
  }
  if (parent) {
    parent.appendChild(elem);
  }
  return elem;
}

function getIndex(elem) {
  return carouselArray.indexOf(elem);
}

function render() {
  clearElement(carouselContent);
  let slide = dom(
    'div',
    { classList: 'slide' },
    `${getIndex(thing)}`,
    carouselContent
  );
  let dot = dom('span', { classList: 'dot' }, null, itemIndicatorContainer);
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// carouselArray.forEach((thing) => {
//   slide.dataset.index = getIndex(thing);
//   dot.dataset.index = getIndex(thing);
//   carouselArray.push(slide);
// });

let slide = document.querySelector('.slide');

// get index of active class -1 > render 3 items

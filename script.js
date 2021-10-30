const down = document.querySelector('.drop-down');
const contents = document.querySelector('.drop-contents');
const carousel = document.querySelector('.carousel');

down.addEventListener('mouseover', () => {
  contents.classList.remove('hide');
});

down.addEventListener('mouseleave', () => {
  contents.classList.add('hide');
});

contents.addEventListener('mouseleave', () => {
  contents.classList.add('hide');
});

let carouselThings = [];

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

// carouselThings.forEach('thing' =>{

// })

const slideItem1 = dom('div', { classList: 'slide' }, 'slide item 1', carousel);
const slideItem2 = dom(
  'div',
  { classList: 'slide active' },
  'slide item 2',
  carousel
);
const slideItem3 = dom('div', { classList: 'slide' }, 'slide item 3', carousel);

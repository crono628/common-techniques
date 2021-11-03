const down = document.querySelector('.drop-down');
const dropContents = document.querySelector('.drop-contents');
const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.carousel-content');
const itemIndicatorContainer = document.querySelector(
  '.item-indicator-container'
);
const slides = carouselContent.childNodes;
const dots = itemIndicatorContainer.childNodes;
const navBtn = document.querySelectorAll('[data-scroll]');

let carouselArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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

let index = 0;

function render() {
  clearElement(carouselContent);
  carouselDisplay.forEach((item) => {
    let slide = dom(
      'a',
      { classList: 'slides', id: item.index, href: '#' + item.index },
      `${item.index}`,
      carouselContent
    );
    dom(
      'a',
      { classList: 'dot', id: item.index, href: '#' + item.index },
      null,
      itemIndicatorContainer
    );
    if ((index = slide.index)) {
      slide.classList.add('active');
    }
  });
}

render();

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

down.addEventListener('mouseover', () => {
  dropContents.classList.remove('hide');
});

down.addEventListener('mouseleave', () => {
  dropContents.classList.add('hide');
});

dropContents.addEventListener('mouseleave', () => {
  dropContents.classList.add('hide');
});

slides.forEach((slide) => {
  slide.addEventListener('click', (e) => {
    slides.forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    index = e.target.id;
    renderActive();
  });
});

dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    dots.forEach((item) => {
      item.classList.remove('active-dot');
    });
    e.target.classList.add('active-dot');
    index = e.target.id;
    renderActive();
  });
});

navBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.scroll === 'right') {
      index++;
      if (index === carouselArray.length) {
        index = 0;
      }
    }
    if (btn.dataset.scroll === 'left') {
      index--;
      if (index === -1) {
        index = carouselArray.length - 1;
      }
    }
    renderActive();
    btn.href = `#${index}`;
  });
});

function renderActive() {
  if (index === undefined) {
    index = 0;
  }
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');

  dots.forEach((dot) => {
    dot.classList.remove('active-dot');
  });
  dots[index].classList.add('active-dot');
}

renderActive();

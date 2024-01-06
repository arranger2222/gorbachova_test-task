const closeBtn = document.querySelector('.close__button');
const openBtn = document.querySelector('.open__button');
const statusArray = document.querySelectorAll('.table__status-wrap');
const aside = document.querySelector('.aside');
const body = document.querySelector('body');

closeBtn.addEventListener('click', toggleHideMenu);
openBtn.addEventListener('click', toggleHideMenu);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggleHideMenu();
  }
});

[...statusArray].map(item => {
  if (item.innerText.toLowerCase() === 'active') {
    item.classList.add('active');
  }
});

function toggleHideMenu() {
  if (aside.classList.contains('aside-hide')) {
    body.classList.add('menu-open');
    aside.classList.remove('aside-hide');
  } else {
    aside.classList.add('aside-hide');
    body.classList.remove('menu-open');
  }
}

function handleResize() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1200) {
    aside.classList.add('aside-hide');
  } else {
    aside.classList.remove('aside-hide');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

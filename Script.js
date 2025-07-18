// 點 ☰ 展開選單
const menuBtn = document.querySelector('.menu');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

// 頁面載入淡入動畫
window.addEventListener('load', () => {
  document.querySelector('.news')?.classList.add('show');
  document.querySelector('.slogan')?.classList.add('show');
});

const buttons = document.querySelectorAll('.button-prokrutka');
const courses = document.querySelectorAll('.courses-div');

const normalize = (s) => (s || '').trim().toLowerCase();

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // убираем прошлый выбор
    buttons.forEach(el => el.classList.remove('clicked'));
    btn.classList.add('clicked');

    // определяем уровень
    const levelText = normalize(btn.querySelector('h2').textContent);

    // показываем/скрываем курсы
    courses.forEach(card => {
      const cardLevel = normalize(card.dataset.level);

      if (levelText === 'all' || cardLevel === levelText) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// humburger click active
let hamburger = document.querySelector(".hamburger");
let hamburger_menu = document.querySelector(".burger-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  hamburger_menu.classList.toggle("burger-menu-fix");
});

// При клике выводилось меню из бургера и позицией fiexed


// Скрол вверх
const backToTop = document.querySelector('.back-to-top');

// Скролл к верху при клике
backToTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Появление кнопки при прокрутке
window.addEventListener('scroll', function() {
  if (window.scrollY > 350) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

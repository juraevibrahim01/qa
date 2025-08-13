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

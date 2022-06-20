export function calcScrollDepth() {
  // Получаем значение прокрутки от начала документа
  const scrollTop = document.documentElement.scrollTop;

  // Проверяем не является ли скрол от верха экрана 0
  if (scrollTop === 0) {
    return "0%";
  }

  // Вычисляем 1% от общей высоты документа
  //   Высота окна с учётом скролла минус резмер вьюпорта пользователя поделено на 100

  const onePercentScroll =
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight) /
    100;

  // Вычисляем в процентах скролл от верха экрана
  const deepScroll = Math.round(scrollTop / onePercentScroll).toString() + "%";
  return deepScroll;
}

export function calcScrollDepth() {
  /* Вычисляем 1% от общей высоты документа 
     Высота окна с учётом скролла минус резмер вьюпорта пользователя поделено на 100 
  */
  const onePercentScroll =
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight) /
    100;

  // Получаем значение прокрутки от начала документа
  const scrollTop = document.documentElement.scrollTop;

  // Вычисляем в процентах скролл от верха экрана
  const deepScroll = Math.round(scrollTop / onePercentScroll).toString() + "%";
  return deepScroll;
}

import { calcScrollDepth } from "./calcScrollDepth.js";

const australiaPhone = document.querySelector('a[href = "tel:+61261888118"]');

export function onClick() {
  // Меняем номер телефона по клику
  australiaPhone.setAttribute("href", "tel: +06-1111-1111");
  australiaPhone.lastChild.textContent = "+06-1111-1111";

  // Получаем значение глубины скролла
  const scrollDepth = calcScrollDepth();

  // Записываем глубину скрола в cookie
  document.cookie = `ScrollTracking=${scrollDepth}; path=/; secure;`;

  // Удаляем слушатель
  australiaPhone.removeEventListener("click", onClick);
}

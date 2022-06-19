import { onClick } from "./onClick.js";

const australiaPhone = document.querySelector('a[href = "tel:+61261888118"]');

function index() {
  const idGoogleAnalytics = "UA-49112570-1"; // ID Google Analytics
  // Получаем ссылку на элемент с нужным номером

  // Проверяем является ли это номер Австралии и соответствует ли Google Id
  if (
    australiaPhone.firstChild.textContent === "Australia :" &&
    idGoogleAnalytics === "UA-49112570-1"
  ) {
    // Если да, вешаем на эту ссылку слушатель события
    australiaPhone.addEventListener("click", onClick);
  }
}

index();

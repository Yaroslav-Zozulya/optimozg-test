(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, d);
})(window, document, "script", "dataLayer", "GTM-T333LJ");

/*
- function (w, d, s, l) - пропущен аргумент функции - i. 
Если не передать в функцию аргумент i выражение 
j.src='https://www.googletagmanager.com/gtm.js?id=' + i + d;
вернёт ошибку так как i не объявлена

- строка w[l].push('gtm.start': new Date().getTime(), event:'gtm.js')
  элемент который мы передаём в push нужно обернуть в фигурные скобки так как это объект с двумя ключами.

- dl = l != 'dataLayer' ? '&l=' + l ? ''; - это тернарный оператор. 
  Вместо второго символа "?" нужно поставить ":"

   f.parentNode.insertBefore(j, d); - заменить d на f. 
   Судя по рабочей версии тэг менеджера он должен вставить созданный элемент
   перед элементом f.
*/

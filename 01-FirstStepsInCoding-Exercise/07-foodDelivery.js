function foodDelivery(input) {
  // • Пилешко меню –  10.35 лв.
  // • Меню с риба – 12.40 лв.
  // • Вегетарианско меню  – 8.15 лв.
  // десерт, чиято цена е равна на 20% от общата сметка (без доставката).
  // Цената на доставка е 2.50 лв и се начислява най-накрая.

  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let veggieMenu = Number(input[2]);

  let menusPrice = chickenMenu * 10.35 + fishMenu * 12.4 + veggieMenu * 8.15;
  let dessertPrice = menusPrice * 0.2;
  let totalPrice = menusPrice + dessertPrice + 2.5;

  console.log(totalPrice);
}
foodDelivery(["2 ", "4 ", "3 "]);

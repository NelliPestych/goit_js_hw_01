'use strict';

let price;
const country = prompt('Выберите страну доставки');
switch (country.toUpperCase()) {
  case 'КИТАЙ':
    price = 100;
    break;

  case 'ЧИЛИ':
    price = 250;
    break;

  case 'АВСТРАЛИЯ':
    price = 170;
    break;

  case 'ИНДИЯ':
    price = 80;
    break;

  case 'ЯМАЙКА':
    price = 120;
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}
console.log(`Доставка в ${country} будет стоить ${price} кредитов`);

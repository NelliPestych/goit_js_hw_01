'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const order = prompt('Какое количество дроидов Вы хотите приобрести?');
console.log(order);
const totalPrice = Number(order) * pricePerDroid;
const balance = credits - totalPrice;
if (order === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${order} дроидов, на счету осталось ${balance} кредитов.`,
  );
}

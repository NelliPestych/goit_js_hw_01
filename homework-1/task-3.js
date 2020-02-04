'use strict';

let message;
const input = prompt('Please enter a password');
const ADMIN_PASSWORD = 'jqueryismyjam';
if (input === null) {
  message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);

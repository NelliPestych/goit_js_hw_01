'use strict'
let message = prompt('Please enter a password');
const ADMIN_PASSWORD = 'jqueryismyjam';
console.log(message);
if (message === null) {
    console.log('Отменено пользователем!')
} else if (message === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!')
} else {console.log('Доступ запрещен, неверный пароль!')}
console.log(message);
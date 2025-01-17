console.log('Это моя первая строка на JS!'); // <= выводим в консоль текст
// Это комментарий, Node.js его не видит
// существует 7 (8) базовых типов данных
// 1. Число
// 2. Строка
// 3. Булевый/логический
// 4. Большое чило 
// 5. "Пустота" (null)
// 6. "Неопределенно"
// 7. Объект
// 8. Символ (напрямую не использует, дополнительные)


// ПЕРЕМЕННАЯ
let value;
let переменная_на_русском;
let _val;
let $val$;
let value1;
// let 2 value; - тут будет ошибка

// устаревший спсоб
var val_var;

const pi = 3.14; // Эта переменная не может быть изменена
// pi = 4; - это приведет к ошибке

// typeof - возвращает тип переменой
console.log(typeof 1)
console.log(typeof(typeof 1));

// Булевый/логический
let success = true;
let question = false;
console.log(success, typeof question);
console.log(question, typeof question)

// Число
let easy = 4;
let percent = 0.99;
let not_a_number = NaN;
let space = Infinity;

console.log(easy, typeof easy);
console.log(percent, typeof percent);
console.log(not_a_number, typeof not_a_number);
console.log(space, typeof space);

// Строки
let nameOfMuseum = 'Эрмитаж';
let nameOfTheater = "Мариинский театр";
let nameOfConcert = `Руки вверх. Уже не молодой`;

console.log(nameOfMuseum, typeof nameOfMuseum);

let e = 2.7;
let descriptionOf_e = `Число Эйлера равно ${e}`
console.log(descriptionOf_e)

// "Пустота" и "Неопределенно"
let some = null;
console.log(some, typeof some)
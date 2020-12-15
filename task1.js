// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
// добавляет поле mood со значением 'happy'
user.mood = 'happy';
console.log (user);
// заменяет значение hobby на 'skydiving'

user.mood = 'skydiving';
console.log (user);

// заменяет значение premium на false
user.premium = false;
console.log (user);

// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
properties = Object.keys(user);

for (let property of properties){
    console.log(`${property}: ${user[property]}`);
}
"use strict";
// corchetes []
//type explicit
let users;
users = ['luis', 'pedro', 'juan'];
// users = [1, true, 'test'] //error
// type inferido
let otherUsers = ['luis', 'pedro', 'juan'];
// otherUsers = [1, true, 'test'] //error
// Array<type>
let picture;
picture = ['holy', 'dark', 'void'];
//Accediendo a los valores de un arreglo
console.log('first user', users[0]);
console.log('first title', picture[0]);
//propiedades
console.log('users.len', users.length);
users.push('elpepe');
users.sort();
console.log('users', users);

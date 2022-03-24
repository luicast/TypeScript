"use strict";
// type object
let user;
user = {};
user = {
    id: 1,
    userName: 'luicast',
    firstName: 'luis',
    isPro: true
};
console.log('user', user);
// Object vs object
const myObj = {
    id: 1,
    userName: 'luicast',
    firstName: 'luis',
    isPro: true
};
const isInstance = myObj instanceof Object; //class Object JavaScript
console.log('isIntance', isInstance);
console.log('user.userName', myObj.userName);

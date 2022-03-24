"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//[1, 'user]
let user;
user = [1, 'luis'];
console.log('user', user);
console.log('username', user[1].length);
console.log('id', user[0]);
// tuplas con varios valores
let userInfo;
userInfo = [2, 'elpepe', true];
console.log('userInfo', userInfo);
//arreglo de tuplas
let arrayInfo = [];
arrayInfo.push([1, 'monas']);
arrayInfo.push([2, 'elcho']);
arrayInfo.push([3, 'momo']);
console.log('array', arrayInfo);
//uso de fuciones array
arrayInfo[2][1] = arrayInfo[2][1].concat('001');
console.log('array', arrayInfo);

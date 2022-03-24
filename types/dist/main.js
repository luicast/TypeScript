"use strict";
console.log('hellos word!');
// number explicit
let phone;
phone = 1;
phone = 43543543;
// phone = 'hello'
// number inflicted
let phoneNumber = 4543543;
// phoneNumber = true
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// boolean
let istPro;
istPro = true;
// istPro = 3
// number inflicted
let isUserPro = true;
isUserPro = false;
//string
let username = 'luis';
username = 'much';
// username = true
//template string
let userInfo;
userInfo = `
user info:
username: ${username}
firstName: ${username + 'castilla'}
phone: ${phone}
isPro: ${istPro}
`;
console.log('userInfo', userInfo);

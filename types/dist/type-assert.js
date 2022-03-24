"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username;
username = 'luis';
// Tenemos un string, Complidor de TS confia en mí:
let message = username.length > 5 ?
    `welcome ${username}` :
    'username is too short';
console.log('message', message);
//como obtener username
let usernameWithId = 'luisCastilla 1';
username = usernameWithId.substring(0, 12);
console.log('username only', username);
// Sintaxis 'as'
message = username.length > 5 ?
    `welcome ${username}` :
    'username is too short';
let helloUser;
helloUser = 'hello nigga';
username = helloUser.substring(6);
console.log('username', username);

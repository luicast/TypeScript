export {}

let username: any
username = 'luis'

// Tenemos un string, Complidor de TS confia en mí:
let message: string = (<string>username).length > 5 ? 
`welcome ${username}`:
'username is too short'

console.log('message', message)

//como obtener username
let usernameWithId: any = 'luisCastilla 1'

username = (<string>usernameWithId).substring(0,12)
console.log('username only', username)

// Sintaxis 'as'
message = (username as string).length > 5 ? 
`welcome ${username}`:
'username is too short'

let helloUser: any
helloUser = 'hello nigga'
username = (helloUser as string).substring(6)
console.log('username', username)
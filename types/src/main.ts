console.log('hellos word!')

// number explicit
 let phone: number
phone = 1
phone = 43543543
// phone = 'hello'

// number inflicted
let phoneNumber = 4543543
// phoneNumber = true

let hex: number = 0xf00d
let binary: number = 0b1010
let octal:number = 0o744

// boolean
let istPro: boolean
istPro = true
// istPro = 3

// number inflicted
let isUserPro = true
isUserPro = false

//string
let username: string = 'luis'
username = 'much'
// username = true

//template string

let userInfo: string
userInfo = `
user info:
username: ${username}
firstName: ${username + 'castilla'}
phone: ${phone}
isPro: ${istPro}
`
console.log('userInfo', userInfo)
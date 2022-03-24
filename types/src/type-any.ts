// type explicit
let idUSer: any
idUSer = 1
idUSer = '1'
console.log('idUser', idUSer)

// type inflicted
let otherId

otherId = 1
otherId = '1'
console.log('otherId', otherId)

let surprise: any = 'Hello typescript'

const res = surprise.substring(6)
console.log('res', res)
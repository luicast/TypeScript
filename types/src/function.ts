export {}
//crear una Fotografia

// function createPicture(title, date, size){
//     // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'

// // usamos TS, definimos tipos para parametros
// function createPicture(title:string, date:string, size:SquareSize) {
//     // se crea la foto
//     console.log('create Picture using', title, date, size)
// }

// createPicture('my Birtday', '2020-03-10', '500x500')
// createPicture('colombia', '2020-03-7')

// parametros opcionales en funciones
function createPicture(title?:string, date?:string, size?:SquareSize) {
    // se crea la foto
    console.log('create Picture using', title, date, size)
}
createPicture('my Birtday', '2020-03-10', '500x500')
createPicture('colombia', '2020-04')

// flat array funtion

let createPic = (title:string, date:string, size:SquareSize):object =>{
    // return{
    //     title: title,
    //     date: date,
    //     size: size
    // }
    return{ title, date, size }
}

const Picture = createPic('plate', '2020-04-4', '100x100')
console.log('picture', Picture)

// tipo de retorno con typeScript

function handleError(code:number, message:string):never | string{
    // procesamiento del codigo, mensaje
    if(message ==='error'){
        throw new Error(`${message}. code error: ${code}`)
    }else{
        return 'an error has occurred'
    }
}

try {
    let result = handleError(200, 'ok') //string
    console.log('result', result)
    result = handleError(404, 'error') //never
    console.log('result', result)
} catch (error) {
    
}


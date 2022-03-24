export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number
    title:string
}

interface Album extends Entity {
    // copia de atributos de entity
    description: string
}

interface Picture extends Entity {
    orientation: PhotoOrientation
}

const album: Album = {
    id: 1,
    title:'meetups',
    description: 'community events'
}

const picture: Picture = {
    id: 1,
    title: 'family',
    orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture

newPicture.id = 2
newPicture.title = 'moon'

console.log('album', album)
console.log('picture', picture)
console.log('newPicture', newPicture)
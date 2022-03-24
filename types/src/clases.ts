export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //propiedades
    public id: number
    public title: string
    public orientation: PhotoOrientation

    public constructor (id:number, title:string, orientation: PhotoOrientation) {
        this.id = id
        this.title = title
        this.orientation = orientation
    }

    //comportamiento
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }
}

class Album {
    public id: number
    public title: string
    public pictures: Picture[]

    public constructor(id:number, title:string) {
        this.id = id
        this.title = title
        this.pictures = []
    }

    public addPicture(picture:Picture) {
        this.pictures.push(picture)
    }
}

const album: Album = new Album(1, 'personal Picture')
const picture: Picture = new Picture(1, 'photo glass', PhotoOrientation.Portrait)
album.addPicture(picture)

console.log('album', album)

// accdediendo a los mienbros publicos

picture.id = 100
picture.title = 'another title'
album.title = 'personal activities'
console.log('album', album)
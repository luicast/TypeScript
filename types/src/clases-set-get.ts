export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //propiedades
    private _id: number
    private _title: string
    private _orientation: PhotoOrientation

    public constructor (id:number, title:string, orientation: PhotoOrientation) {
        this._id = id
        this._title = title
        this._orientation = orientation
    }

    get id() {
        return this._id
    }

    set id(id:number){
        this._id = id
    }

    get title() {
        return this._title
    }

    set title(title:string) {
        this._title = title
    }

    get orientation() {
        return this._orientation
    }

    set orientation(o:PhotoOrientation) {
        this._orientation = o
    }

    //comportamiento
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }
}

class Album {
    private _id: number
    private _title: string
    private pictures: Picture[]

    public constructor(id:number, title:string) {
        this._id = id
        this._title = title
        this.pictures = []
    }

    get id() {
        return this._id
    }

    set id(id:number) {
        this._id = id
    }

    get title() {
        return this._title
    }

    set title(title:string) {
        this._title = title 
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
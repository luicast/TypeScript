export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//superclase
abstract class Item {
    protected readonly _id: number
    protected _title: string

    constructor(id: number, title:string) {
        this._id = id
        this._title = title
    }
     get id() {
        return this._id
    }

    // set id(id:number){
    //     this._id = id
    // }

    get title() {
        return this._title
    }

    set title(title:string) {
        this._title = title
    }
}

class Picture extends Item {
    public static photoOrientation = PhotoOrientation
    //propiedades
    private _orientation: PhotoOrientation

    public constructor (id:number, title:string, orientation: PhotoOrientation) {
        super(id, title)
        this._orientation = orientation
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

class Album extends Item {
    private pictures: Picture[]

    public constructor(id:number, title:string) {
        super(id, title)
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
console.log('picture', picture.id)
// picture.id = 100
picture.title = 'another title'
album.title = 'personal activities'
console.log('album', album)

// const item = new Item(1, 'test')
// console.log('item', item)

// probrar el miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Landscape)

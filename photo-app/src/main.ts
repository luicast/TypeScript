import { User } from "./user"
import { Album } from "./album"
import { Picture } from "./picture"
import { PhotoOrientation } from "./photo-orientation"

const user = new User(1,'luisCastilla', 'luis', true)
const album = new Album(10,'Pictures')
const picture = new Picture(1, 'typeScript', '2022-03-24', PhotoOrientation.Landscape)
//creamos album
user.addAlbum(album)
album.addPicture(picture)
console.log('user', user)

//borramos album
user.removeAlbum(album)
console.log('user', user)
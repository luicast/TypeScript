"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 1,
    title: 'meetups',
    description: 'community events'
};
const picture = {
    id: 1,
    title: 'family',
    orientation: PhotoOrientation.Landscape
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'moon';
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);

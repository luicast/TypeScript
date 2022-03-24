"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[title: ${picture.title}, 
                date: ${picture.date}, 
                orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'test title',
    date: '2022-03-04',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'name',
    date: '2022-04-02',
    orientation: PhotoOrientation.Portrait,
    // extra: 'prueba' //error
});
function generatePicture(config) {
    const pic = { title: 'default', date: '2022-03-20' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'travel' });
console.log('picture', picture);
picture = generatePicture({ title: 'travel', date: '2022-05-13' });
console.log('picture', picture);
let user;
user = { id: 10, userName: 'luis castilla', isPro: true };
console.log('user', user);
user.userName = 'esteban castilla';
// user.id = 20 // error
console.log('user', user);

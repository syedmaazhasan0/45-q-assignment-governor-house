function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Maaz Hasan", "Light");
console.log(album);
var album1 = makeAlbum("Wania Shah", "Chemicals");
console.log(album1);
var album2 = makeAlbum("Asif Ali", "Adventure Park");
console.log(album2);

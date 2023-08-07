
class playList {
constructor (name) {
this._name = name;
this._songs = []
}

addSongs(song) {
    if (!this._songs.includes(song)) {
    throw new Error ("Song already exist")}
else {
    this._songs.push(song);
}
}

removeSong (song) {
    const index = this._songs.indexOf(song);
    if (index != -1){
    this._songs.splice(song);
    }
}

getTotalDuration () {
let totalDuration = 0
for (let song of this._songs) {
    totalDuration += song.getTotalDuration();
}
return totalDuration;
}



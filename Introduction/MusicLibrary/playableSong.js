class playableSong extends Song {
constructor (title, artist, duration, filePath) {
super(title, artist, duration);
this_.flePath = filePath;
}

getDuration () {
    let minutes = Math.floor(this._duration / 60);
    let seconds = this._duration % 60

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}



}
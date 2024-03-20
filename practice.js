class Dvd {
    constructor(x, z) {
        this.movieName = x;
        this.year = z;
    }


}

let movie1 = new Dvd("Highlander", 1990)
movie1.genre = "fantasy";
movie1.watchMovie = (person) => {
    console.log("watching " + person + " watch " + movie1.movieName)
}

movie1.watchMovie("Steve");



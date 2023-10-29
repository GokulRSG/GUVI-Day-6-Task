class movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(){
        return `${this.title} is rated ${this.rating}.`;
    }
}

const movierating = new movie("Casino Royale","Eon Productions","PG­13");



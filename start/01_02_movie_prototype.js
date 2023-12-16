// Write your code here
class Movie {
  constructor (movieTitle, movieDirector, movieGenre, movieReleaseYear, movieRating) {
    this.movieTitle = movieTitle;
    this.movieDirector = movieDirector;
    this.movieGenre = movieGenre;
    this.movieReleaseYear = movieReleaseYear;
    this.movieRating = movieRating;
  }

  getOverview() {
    return `${this.movieTitle}, a ${this.movieGenre} file directed by ${this.movieDirector} was released in ${this.movieReleaseYear}. It received a rating of ${this.movieRating}`
  }
}

const ToyStory = new Movie ("Toy Story", "David", "Action", "2022", "7.5")
console.log(ToyStory.getOverview());

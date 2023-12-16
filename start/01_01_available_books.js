// Write your code here
class Book {

  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability () {
    this.getAvailability();
  }

  getAvailability () {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low in stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restorck(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);

HungerGames.restock(12);
console.log(HungerGames.availability);

HungerGames.sell(17);
console.log(HungerGames.availability);

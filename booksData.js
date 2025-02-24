const booksData = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
    availableCopies: 5,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
    availableCopies: 8,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishedYear: 1925,
    availableCopies: 4,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    availableCopies: 6,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: 1951,
    availableCopies: 3,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937,
    availableCopies: 7,
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    publishedYear: 1953,
    availableCopies: 5,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publishedYear: 1851,
    availableCopies: 2,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical",
    publishedYear: 1869,
    availableCopies: 4,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    publishedYear: 1966,
    availableCopies: 9,
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological",
    publishedYear: 1866,
    availableCopies: 6,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    publishedYear: 1932,
    availableCopies: 5,
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Gothic",
    publishedYear: 1847,
    availableCopies: 7,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Gothic",
    publishedYear: 1847,
    availableCopies: 3,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1954,
    availableCopies: 10,
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    publishedYear: 1818,
    availableCopies: 4,
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    publishedYear: 1897,
    availableCopies: 6,
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Philosophical",
    publishedYear: 1890,
    availableCopies: 5,
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical",
    publishedYear: 1880,
    availableCopies: 4,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    publishedYear: 1988,
    availableCopies: 8,
  },
];

// Storing the objectId of each book in variables

book1 = db.Books.findOne({ title: "To Kill a Mockingbird" })._id;
book2 = db.Books.findOne({ title: "1984" })._id;
book3 = db.Books.findOne({ title: "The Great Gatsby" })._id;
book4 = db.Books.findOne({ title: "Pride and Prejudice" })._id;
book5 = db.Books.findOne({ title: "The Catcher in the Rye" })._id;
book6 = db.Books.findOne({ title: "The Hobbit" })._id;
book7 = db.Books.findOne({ title: "Fahrenheit 451" })._id;
book8 = db.Books.findOne({ title: "Moby-Dick" })._id;
book9 = db.Books.findOne({ title: "War and Peace" })._id;
book10 = db.Books.findOne({ title: "The Odyssey" })._id;
book11 = db.Books.findOne({ title: "Crime and Punishment" })._id;
book12 = db.Books.findOne({ title: "Brave New World" })._id;
book13 = db.Books.findOne({ title: "Jane Eyre" })._id;
book14 = db.Books.findOne({ title: "Wuthering Heights" })._id;
book15 = db.Books.findOne({ title: "The Lord of the Rings" })._id;
book16 = db.Books.findOne({ title: "Frankenstein" })._id;
book17 = db.Books.findOne({ title: "Dracula" })._id;
book18 = db.Books.findOne({ title: "The Picture of Dorian Gray" })._id;
book19 = db.Books.findOne({ title: "The Brothers Karamazov" })._id;
book20 = db.Books.findOne({ title: "The Alchemist" })._id;

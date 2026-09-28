const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    read: true,
    id : crypto.randomUUID()
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: false,
    id : crypto.randomUUID()
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
    read: true,
    id : crypto.randomUUID()
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    pages: 209,
    read: true,
    id : crypto.randomUUID()
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: false,
    id : crypto.randomUUID()
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 412,
    read: false,
    id : crypto.randomUUID()
  }
];

function Book(title, author, pages, readStat) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStat = readStat ? "read" : "unread";
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStat) {
    books.push(Book(title, author, pages, readStat));
}
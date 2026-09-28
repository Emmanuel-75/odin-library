const books = [];

const mainSection = document.querySelector("main");

function Book(title, author, pages, readStat) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStat = readStat ? "read" : "unread";
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStat) {
  books.push(new Book(title, author, pages, readStat));
}

// Classic Literature
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);

// Sci-Fi & Fantasy
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 423, false);
addBookToLibrary("The Two Towers", "J.R.R. Tolkien", 352, false);
addBookToLibrary("The Return of the King", "J.R.R. Tolkien", 416, true);

// Modern Fiction & Mystery
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("Life of Pi", "Yann Martel", 319, false);
addBookToLibrary("The Kite Runner", "Khaled Hosseini", 371, false);
addBookToLibrary("A Thousand Splendid Suns", "Khaled Hosseini", 384, true);

// Non-Fiction & Self-Improvement
addBookToLibrary("Sapiens", "Yuval Noah Harari", 443, false);
addBookToLibrary("Homo Deus", "Yuval Noah Harari", 450, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Deep Work", "Cal Newport", 304, true);

function DisplayBooks(inventory) {
  mainSection.innerHTML = "";
  for (let book of inventory) {
    const template = document.querySelector("template").content.cloneNode(true);
    ((template.querySelector(".bookTitle").textContent = book.title),
      (template.querySelector(".bookAuthor .primaryText").textContent =
        book.author));
    template.querySelector(".bookPages .primaryText").textContent = book.pages;
    template.querySelector(".readStat").textContent = book.readStat;
    if (book.readStat == "read") {
      template.querySelector(".readStat").style.color =
        "oklch(72.3% 0.219 149.579)";
      const markBtn = template.querySelector(".readBtn");
      markBtn.querySelector("span").textContent = "unread";
      markBtn.style.backgroundColor = "oklch(88.5% 0.062 18.334)";
      markBtn.style.color = "oklch(63.7% 0.237 25.331)";
      markBtn.style.fill = "oklch(63.7% 0.237 25.331)";
    } else {
      template.querySelector(".readStat").style.color =
        "oklch(63.7% 0.237 25.331)";
      const markBtn = template.querySelector(".readBtn");
      markBtn.querySelector("span").textContent = "read";
      markBtn.style.backgroundColor = "oklch(92.5% 0.084 155.995)";
      markBtn.style.color = "oklch(62.7% 0.194 149.214)";
      markBtn.style.fill = "oklch(62.7% 0.194 149.214)";
    }

    mainSection.appendChild(template);
  }
  console.log(books);
}

DisplayBooks(books);

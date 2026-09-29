# Library

A small interactive library application built with HTML, CSS, and JavaScript as part of [The Odin Project](https://www.theodinproject.com/).

The application allows users to add books, view their details, remove books, and toggle their read status.

## Features

- Display books as individual cards
- Add new books through a form
- Track:
  - Book title
  - Author
  - Number of pages
  - Read/unread status
- Generate a unique ID for every book using `crypto.randomUUID()`
- Remove books from the library
- Toggle a book's read/unread status
- Use a `<dialog>` element for the new-book form
- Use an HTML `<template>` to generate book cards
- Use `data-*` attributes to associate DOM elements with book objects
- Use event delegation for book controls
- Dynamically render the library from the JavaScript array

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## JavaScript Concepts Practiced

- Constructor functions
- Objects
- Prototypes
- Prototype methods
- Arrays
- `crypto.randomUUID()`
- DOM manipulation
- HTML templates
- Event listeners
- Event delegation
- Form handling
- `event.preventDefault()`
- `data-*` attributes
- Conditional logic
- Array manipulation
- Separation of data and presentation

## How It Works

### Book Constructor

Each book is represented as an object created using the `Book` constructor.

Each book contains:

- `title`
- `author`
- `pages`
- `readStat`
- `id`

A unique ID is generated for every book using:

```javascript
crypto.randomUUID()
````

### Library Array

All book objects are stored in the `books` array.

```javascript
const books = [];
```

Books are added to the array through the `addBookToLibrary()` function.

```javascript
function addBookToLibrary(title, author, pages, readStat) {
  books.push(new Book(title, author, pages, readStat));
}
```

### Read Status

The `Book` constructor has a prototype method called `changeReadStatus()`.

```javascript
Book.prototype.changeReadStatus = function () {
  this.readStat = this.readStat == "read" ? "unread" : "read";
};
```

This allows individual book objects to change their read status without recreating the object.

### Displaying Books

The `DisplayBooks()` function loops through the library array and creates a card for every book.

An HTML `<template>` is used as the structure for each book card.

Each book card receives the unique ID of its corresponding book through a `data-*` attribute:

```html
<section class="book" data-book-id="...">
```

This allows the application to associate a DOM element with the correct book object in the `books` array.

### Adding Books

Clicking the **New book +** button opens a `<dialog>` containing a form.

When the form is submitted:

1. The browser's default form submission is prevented.
2. The values entered by the user are retrieved.
3. A new `Book` object is created.
4. The book is added to the `books` array.
5. The dialog is closed.
6. The library is rendered again.

### Removing Books

Each book card contains a **Remove** button.

Event delegation is used on the `<main>` element to detect clicks on the remove buttons.

The book's unique ID is compared against the IDs in the `books` array. Once the matching book is found, it is removed using `splice()`.

The library is then rendered again to reflect the updated array.

### Changing Read Status

Each book contains a button for changing its read status.

When the button is clicked, the application:

1. Identifies the book card that was clicked.
2. Retrieves its unique book ID.
3. Searches the `books` array for the matching book.
4. Calls the book's `changeReadStatus()` prototype method.
5. Re-renders the library.

## Project Structure

```text
library/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Design

The application uses a dark interface with blue accents.

CSS Grid is used to create a responsive layout for the book cards.

The interface uses the following Google Fonts:

* Quicksand
* Cookie

## What I Practiced

This project reinforced the idea of keeping **application data separate from the DOM**.

The `books` array acts as the source of the application's book data, while the DOM is generated from that data through the `DisplayBooks()` function.

This makes it possible to recreate the interface whenever the underlying data changes instead of manually managing individual book cards.

The project also provided practice with:

* Constructor functions
* Prototypes
* DOM manipulation
* HTML templates
* Forms and dialogs
* Event delegation
* Data attributes
* Unique object identifiers
* Array manipulation
* Separating application logic from presentation

## Credits

Built by **DevManolis** while following [The Odin Project](https://www.theodinproject.com/).

Project: [JavaScript Library](https://www.theodinproject.com/lessons/node-path-javascript-library)

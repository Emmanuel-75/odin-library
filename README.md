
# Library

A small interactive library application built with HTML, CSS, and JavaScript as part of [The Odin Project](https://www.theodinproject.com/).

The application allows users to add books, view their details, remove books, and toggle their read status.

## Features

- Display books as individual cards
- Add new books through a form inside an HTML `<dialog>`
- Track book title, author, number of pages, and read/unread status
- Generate unique IDs using `crypto.randomUUID()`
- Encapsulate each book's ID using a private class field
- Remove books from the library
- Toggle a book's read/unread status
- Use an HTML `<template>` to generate book cards
- Use `data-*` attributes to associate DOM elements with book objects
- Use event delegation to handle book controls
- Dynamically render the library from the JavaScript array
- Display sample books from different literary categories
- Apply conditional styling based on each book's read status
- Use CSS Grid to create a responsive book-card layout

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## JavaScript Concepts Practiced

- ES6 classes
- Class constructors
- Objects and instances
- Private class fields
- Getter methods
- Instance methods
- Arrays and array manipulation
- `crypto.randomUUID()`
- DOM manipulation
- HTML templates
- Event listeners
- Event delegation
- Form handling
- `event.preventDefault()`
- `data-*` attributes
- Conditional logic
- The `closest()` method
- The `classList` API
- The `dataset` API
- The `<dialog>` element and its methods
- Separation of application data and presentation

## How It Works

### Book Class

Each book is represented by an object created from the `Book` class.

```javascript
class Book {
  #id = crypto.randomUUID();

  constructor(title, author, pages, readStat) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStat = readStat ? "read" : "unread";
  }

  changeReadStatus() {
    this.readStat =
      this.readStat === "read" ? "unread" : "read";
  }

  get idGetter() {
    return this.#id;
  }
}
```

Each book instance contains the following properties:

- `title`: The book's title
- `author`: The book's author
- `pages`: The number of pages
- `readStat`: Whether the book has been read
- `#id`: A unique identifier generated using `crypto.randomUUID()`

The `constructor()` method initializes the properties of each book when an instance is created.

The `#id` field is private and cannot be accessed directly from outside the class. The `idGetter` getter provides access to its value.

The `changeReadStatus()` instance method switches the book's read status without creating a new object.

Using a class keeps the data and behavior associated with a book organized in one place.

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

The function creates a new `Book` instance and adds it to the array.

The application also initializes the library with sample books, including *1984*, *The Hobbit*, *Atomic Habits*, and *To Kill a Mockingbird*.

### Managing Read Status

The `changeReadStatus()` instance method switches a book between `"read"` and `"unread"`.

```javascript
changeReadStatus() {
  this.readStat =
    this.readStat === "read" ? "unread" : "read";
}
```

The `this` keyword refers to the specific book instance on which the method is called.

The ternary operator checks the current status and assigns the opposite value.

Because the method belongs to the class, each book instance can update its own status independently.

### Displaying Books

The `DisplayBooks()` function renders the books stored in the library array.

It first clears the existing contents of the `<main>` element and then loops through the array to generate a card for each book.

An HTML `<template>` provides the structure for each card.

```javascript
const template = document
  .querySelector("template")
  .content.cloneNode(true);
```

The template is cloned so that each book receives its own set of DOM elements.

The function inserts the book's title, author, page count, and read status into the appropriate elements.

Each card receives the ID of its corresponding book through a `data-*` attribute.

```javascript
template.querySelector("section").dataset.bookId =
  book.idGetter;
```

This creates a `data-book-id` attribute that allows the application to identify the book associated with a particular card.

The function also applies different colors to the read-status label and status button depending on whether the book has been read.

Finally, the completed card is appended to the `<main>` element.

### Adding Books

Clicking the **New book +** control opens the HTML `<dialog>` using its `showModal()` method.

The dialog contains a form for entering the book's title, author, page count, and read status.

When the form is submitted:

1. `event.preventDefault()` prevents the browser's default form-submission behavior.
2. The entered values are retrieved from the form fields.
3. A new `Book` instance is created through `addBookToLibrary()`.
4. The new book is added to the `books` array.
5. The dialog is closed using `dialog.close()`.
6. `DisplayBooks(books)` renders the updated library.
7. The text and page-count fields are cleared, and the selected radio button is reset.

The form uses HTML validation attributes such as `required` and `min="10"` to restrict invalid input.

### Removing Books

Each book card contains a **Remove** button.

Event delegation is used to handle removal clicks on the `<main>` element instead of attaching a separate event listener to every book card.

When a remove button is clicked:

1. The event handler checks whether the clicked element has the `remove` class.
2. `closest(".book")` locates the book card containing the button.
3. The card's `data-book-id` identifies the corresponding book object.
4. The array is searched for the matching book.
5. `splice()` removes the matching object from the array.
6. `DisplayBooks(books)` renders the updated library.

The `return` statement prevents unrelated clicks from triggering the removal logic.

### Changing Read Status

Each book card contains a button for toggling its read status.

Event delegation is also used to handle these clicks.

When the read-status button is clicked:

1. The event handler identifies the clicked button using `closest("button")`.
2. It checks whether the button has the `readBtn` class.
3. `closest(".book")` locates the corresponding book card.
4. The card's `data-book-id` is compared with the IDs of the book objects in the array.
5. The matching book's `changeReadStatus()` method is called.
6. `DisplayBooks(books)` renders the updated library.

The button label and status colors are updated during rendering to reflect the book's new status.

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

- **Color scheme:** Dark backgrounds, light text, and blue accents
- **Layout:** Responsive CSS Grid for the book cards
- **Typography:** Quicksand for the main interface and Cookie for the header and footer
- **Interactions:** Hover effects, button feedback, and a modal form
- **Read-status indicators:** Different colors for read and unread books

Google Fonts supplies the Quicksand and Cookie typefaces.

## What I Practiced

This project reinforced the importance of separating application data from the DOM.

The `books` array serves as the source of truth for the library's data, while the `DisplayBooks()` function generates the interface from that data. Whenever a book is added, removed, or updated, the application re-renders the library to reflect its current state.

Switching from constructor functions and prototype methods to ES6 classes also provided practice with a more structured way of defining objects and their behavior.

The project helped me practice:

- Defining classes and creating instances
- Using constructors to initialize objects
- Encapsulating data with private class fields
- Accessing private data through a getter
- Defining and calling instance methods
- Managing collections of objects with arrays
- Generating unique identifiers
- Manipulating the DOM with JavaScript
- Cloning and populating HTML templates
- Handling forms and modal dialogs
- Using event delegation to manage dynamic elements
- Identifying DOM elements with `data-*` attributes
- Updating object properties and rendering changes
- Separating application logic from presentation

## Credits

Built by **DevManolis** while following [The Odin Project](https://www.theodinproject.com/).

Project: [JavaScript Library](https://www.theodinproject.com/lessons/node-path-javascript-library)

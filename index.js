'use strict';

const Library = [];

function Book (title,author,pages,haveRead) {
    if (!new.target) {
        throw Error ("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

const theHobbit = new Book ('Hobbit','John',4000,'not read yet');

function addBookToLibrary(title,author,pages,haveRead) {
  const book = new Book (title,author,pages,haveRead);
  book.id = crypto.randomUUID();
  Library.push(book)
}

//sample books

addBookToLibrary("1984", "George Orwell", 328, "not read yet");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, "not read yet");
addBookToLibrary("Moby Dick", "Herman Melville", 635, "not read yet");
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, "not read yet");
addBookToLibrary("The Alchemist", "Paulo Coelho", 197, "read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "read");


console.log(Library);


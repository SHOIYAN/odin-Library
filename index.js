"use strict";

const Library = [];

function Book(title, author, pages, haveRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

const theHobbit = new Book("Hobbit", "John", 4000, "not read yet");

function addBookToLibrary(title, author, pages, haveRead) {
  const book = new Book(title, author, pages, haveRead);
  book.id = crypto.randomUUID();
  Library.push(book);
}

//sample books

addBookToLibrary("1984", "George Orwell", 328, "not read yet");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "read");
addBookToLibrary(
  "The Catcher in the Rye",
  "J.D. Salinger",
  277,
  "not read yet"
);
addBookToLibrary("Moby Dick", "Herman Melville", 635, "not read yet");
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, "not read yet");
addBookToLibrary("The Alchemist", "Paulo Coelho", 197, "read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "read");

// dom elements
const tableBody = document.getElementById("libraryTableBody");

// Display function
function displayBooks() {
  tableBody.textContent = '';

  Library.forEach((book) => {
    const tableRow = document.createElement("tr");

    const titleTableData = document.createElement("td");
    titleTableData.textContent = book.title;

    const authorTableData = document.createElement("td");
    authorTableData.textContent = book.author;

    const pagesTableData = document.createElement("td");
    pagesTableData.textContent = book.pages;

    const readTableData = document.createElement("td");
    readTableData.textContent = book.haveRead;

    const actionsTableData = document.createElement("td");
    const toggleBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    removeBtn.textContent = "Remove";

    actionsTableData.append(toggleBtn, removeBtn);

    tableRow.append(
      titleTableData,
      authorTableData,
      pagesTableData,
      readTableData,
      actionsTableData
    );

    tableBody.prepend(tableRow);
  });
}


displayBooks();

// modal section

const dialog = document.getElementById("bookDialog");
const addBookBtn = document.getElementById("newBookBtn");
const addModalBtn = document.querySelector(".add");
const cancelModalBtn = document.querySelector(".cancel");

addBookBtn.addEventListener("click", () => {
  dialog.returnValue = "";
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  const form = dialog.querySelector("form");
  
  if (dialog.returnValue === "add") {
    const data = new FormData(form);

    addBookToLibrary(
      data.get("title"),
      data.get("author"),
      data.get("pages"),
      data.get("haveRead") ? "read" : "not read yet"
    );

    displayBooks();
  }

  form.reset();
});




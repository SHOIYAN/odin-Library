'use strict';

function Book (title,author,pages,haveRead) {
    if (!new.target) {
        throw Error ("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages,${this.haveRead}`
    }

}

const theHobbit = new Book ('Hobbit','John',4000,'not read yet');

console.log(theHobbit.info());
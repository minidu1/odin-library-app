const myLibrary = []

function Book(title, author, pages){
    if (!new.target) {
        throw Error("you need to use 'new' operator to call the constructor")
    }

    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages))
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310)
addBookToLibrary("1984", "George Orwell", 328)
addBookToLibrary("Brave New World", "Aldous Huxley", 288)

myLibrary.forEach(book => console.log(book))

const library = document.querySelector(".library")

const card = document.createElement("div") 
card.classList.add("book-card")
library.appendChild(card)

const bookName =  document.createElement("div")
bookName.classList.add("name")
card.appendChild(bookName)

const content = document.createElement("div")
content.classList.add("content")
card.appendChild(content)
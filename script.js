const myLibrary = []

// functions
function Book(title, author, pages) {
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

const displayBooks = function () {
    myLibrary.forEach((book) => {

        const card = document.createElement("div")
        card.classList.add("book-card")
        library.appendChild(card)

        const bookName = document.createElement("div")
        bookName.classList.add("name")
        card.appendChild(bookName)
        bookName.textContent = book.title

        const author = document.createElement("div")
        author.classList.add("content")
        card.appendChild(author)
        author.textContent = `by ${book.author}`

        const pages = document.createElement("div")
        pages.classList.add("content")
        card.appendChild(pages)
        pages.textContent = `${book.pages} pages`

    })
}

// variables
const library = document.querySelector(".library")
const bookForm = document.querySelector("form")

const openFormBtn = document.querySelector(".open-add-book")
const closeFormBtn = document.querySelector(".cancel-button")

// code 
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310)
addBookToLibrary("1984", "George Orwell", 328)
addBookToLibrary("Brave New World", "Aldous Huxley", 288)

openFormBtn.addEventListener("click", () =>{
    bookForm.style.display = 'block';
})

closeFormBtn.addEventListener("click", () =>{
    bookForm.style.display = "none";
} )

displayBooks()
const myLibrary = []
let currentBook = 0

// variables
const library = document.querySelector(".library")
const bookForm = document.querySelector("form")

const openFormBtn = document.querySelector(".open-add-book")
const closeFormBtn = document.querySelector(".cancel-button")
const form = document.querySelector("form")

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

function deleteBook(id, card) {

    function getIndex(book) {
        return book.id === id
    }
    const index = myLibrary.findIndex(getIndex)
    if(index !== -1){
    myLibrary.splice(index,1)
    card.remove()
    currentBook -=1
    }
    else{
        alert("No book found")
    }
}

const displayBooks = function () {
    let lastBook = myLibrary.length - 1
    while (currentBook <= lastBook) {
        let book = myLibrary[currentBook]

        const card = document.createElement("div")
        card.classList.add("book-card")
        library.appendChild(card)

        card.dataset.id = book.id
        const id = (card.dataset.id)

        const bookName = document.createElement("div")
        bookName.classList.add("name")
        card.appendChild(bookName)
        bookName.textContent = book.title

        card.appendChild(document.createElement("hr"))

        const author = document.createElement("div")
        author.classList.add("content")
        card.appendChild(author)
        author.textContent = `by ${book.author}`

        const pages = document.createElement("div")
        pages.classList.add("content")
        card.appendChild(pages)
        pages.textContent = `${book.pages} pages`

        card.appendChild(document.createElement("hr"))

        const footer = document.createElement("div")
        footer.classList.add("card-footer")
        card.appendChild(footer)

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-button");
        deleteBtn.textContent = "Delete";
        footer.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            deleteBook(id, card)
        })

        const readBtn = document.createElement("button")
        readBtn.classList.add("read-button")
        readBtn.textContent = "Read"
        footer.appendChild(readBtn)

        currentBook += 1
    }
}

function closeForm() {
    bookForm.style.display = "none";
    form.reset()
}

function addNewBook(event) {
    event.preventDefault();
    const title = event.target["book-name"].value.trim()
    let author = event.target["author"].value.trim()
    let pages = Number(event.target["pages"].value)

    if (title === "" || title == null) {
        window.alert("Is this book called 'John cena'?")
    }
    else if (isNaN(pages) || pages < 0) {
        window.alert("Enter valid positive page number")
    }

    else {
        if (pages == 0) {
            pages = "Unknown"
        }

        if (author === "") {
            author = "Unknown Author"
        }

        addBookToLibrary(title, author, pages)
        displayBooks()
        closeForm()
    }
}


// code 
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310)
addBookToLibrary("1984", "George Orwell", 328)
addBookToLibrary("Brave New World", "Aldous Huxley", 288)

openFormBtn.addEventListener("click", () => {
    bookForm.style.display = 'block';
})

closeFormBtn.addEventListener("click", closeForm)

form.addEventListener("submit", addNewBook)

displayBooks()
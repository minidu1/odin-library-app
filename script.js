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

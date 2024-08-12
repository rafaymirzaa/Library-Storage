const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
    document.getElementById('bookForm').reset();
    document.getElementById('formContainer').classList.add('hidden');
}

function displayBooks() {
    const libraryContainer = document.getElementById('libraryContainer');
    libraryContainer.innerHTML = '';
    
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.index = index;
        
        bookCard.innerHTML = `
            <div>
                <strong>Title:</strong> ${book.title}<br>
                <strong>Author:</strong> ${book.author}<br>
                <strong>Pages:</strong> ${book.pages}<br>
                <strong>Read:</strong> ${book.read ? 'Yes' : 'No'}
            </div>
            <div>
                <button onclick="removeBook(${index})">Remove</button>
                <button onclick="toggleReadStatus(${index})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            </div>
        `;
        
        libraryContainer.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.getElementById('bookForm').addEventListener('submit', addBookToLibrary);
document.getElementById('newBookBtn').addEventListener('click', () => {
    document.getElementById('formContainer').classList.toggle('hidden');
});

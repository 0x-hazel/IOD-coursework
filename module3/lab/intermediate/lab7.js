// Question 7
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    return books.find((val) => val.id === bookId)
}

function getOldBooks() {
    return books.filter((val) => val.year < 1950)
}

function addGenre() {
    books.map((val) => {val.genre = 'classic'})
}

function getTitles(authorInitial) {
    const initial = authorInitial.toUpperCase()
    return books.filter((val) => val.author.toUpperCase().startsWith(initial))
    .map((book) => book.title)
}

function latestBook() {
    let latest = -9999
    books.forEach((val) => {
        if (latest < val.year) {
            latest = val.year
        } 
    })
    return books.find((val) => val.year == latest)
}
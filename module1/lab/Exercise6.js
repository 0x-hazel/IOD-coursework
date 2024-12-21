let book = {
    title: "The Hobbit",
    description: "Lorem ipsum dolor sit amet.",
    author: "J. R. R. Tolkien",
    pages: 310
}

console.log(book)
console.log(book.title)
console.log(`by ${book.author}`)
console.log(`${book.pages} pages`)
console.log('---')

book.description = "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely travelling further than the pantry of his hobbit-hole in Bag End. " +
    "But his contentment is disturbed when the wizard, Gandalf, and a company of thirteen dwarves arrive on his doorstep one day to whisk him away on an unexpected journey ‘there and back again’. " +
    "They have a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon… "

console.log(book.description)

const library = [book]
library.push(
    {
        title: "The Lord of the Rings",
        description: "",
        author: "J. R. R. Tolkien",
        pages: 423
    }
)
console.log(library)

library.push({
    title: "The Silmarillion",
    author: "J. R. R. Tolkien"
})

function shuffle(list) {
    for (let i = 0; i < list.length; i++) {
        let target = Math.floor(Math.random() * list.length)
        let val = list[i]
        list[i] = list[target]
        list[target] = val
    }
}
shuffle(library)
console.log("Shuffled:")
console.log(library)


// would be easier
class Book {
    constructor(title, author, description, pages) {
        self.title = title
        self.author = author
        self.description = description
        self.pages = pages
    }
}
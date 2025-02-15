// Question 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
    ['Dana', '0423423454'],
    ['Emily', '0434534565'],
    ['Fred', '0498798767'],
])
phoneBookABC.set('Caroline', '0498798798')

function printPhoneBook(contacts) {
    for (let name of contacts.keys()) {
        console.log(`- ${name}: ${contacts.get(name)}`)
    }
}

const phoneBook = new Map([...phoneBookABC.entries(), ...phoneBookDEF.entries()])

printPhoneBook(phoneBook)
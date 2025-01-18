const my = {}

my.name = "Hazel"
my.dateOfBirth = "2001-10-31"
my.location = "The Void"

my.pets = []
my.pets.push(
    {
        name: "Kuro",
        species: 'cat'
    }
)

my.singing = () => {
    console.log('la la la')
}

delete my.location
console.log(my)
my.singing() // is alright I guess?
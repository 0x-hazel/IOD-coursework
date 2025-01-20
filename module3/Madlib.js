let madLib = `"William Shakespeare is regarded by scholars and PLURAL_NOUN_ONE alike as the greatest playwright and NOUN_ONE ever to put pen to page. Although he wrote in his native PART_OF_THE_BODY, Shakespeare has been translated into twelve different PLURAL_NOUN_TWO and his plays and poems are ADVERB read and performed everywhere in the world. Hamlet's soliloquy — which begins, "To be or not to be, that is the NOUN_TWO" — has been delivered on stage by more ADJECTIVE_ONE actors than any other ADJECTIVE_NOUN ever written. Among Shakespeare's greatest plays are Hamlet, Romeo and Juliet, The NOUN_THREE of Venice, King PROPER_NOUN, A Midsummer Night's NOUN_FOUR, and The Taming of the NOUN_FIVE. We could go on, but we must leave. As Romeo said to Juliet, "Parting is such ADJECTIVE_TWO sorrow."`
const oneOf = (x) => x[Math.floor(Math.random() * x.length)]
const options = {
    "PLURAL_NOUN_ONE": ["octopi", "spiders", "printers", "black holes", "pies"],
    "NOUN_ONE": ["dog", "number", "sun", "meal", "cork"],
    "PART_OF_THE_BODY": ["spleen", "kidney", "foot", "eyelash"],
    "PLURAL_NOUN_TWO": ["universes", "bottles", "cats", "waffles", "data"],
    "ADVERB": ["barely", "certainly", "narrowly", "quickly"],
    "NOUN_TWO": ["answer", "object", "pie", "snail", "that"],
    "ADJECTIVE_ONE": ["dull", "shiny", "pointed", "confused", "hungry"],
    "ADJECTIVE_NOUN": ["planet", "keyboard", "pie", "tree", "sandwich"],
    "NOUN_THREE": ["Dog", "Head", "Lemur", "Star", "Horn", "Phantom"],
    "PROPER_NOUN": ["Henry VIII", "Julian", "Arthur", "Kong"],
    "NOUN_FOUR": ["Mare", "Song", "Visions", "Pie", "Octopus"],
    "NOUN_FIVE": ["Blue", "Horse", "Sky", "Snail", "Book"],
    "ADJECTIVE_TWO": ["stinky", "strange", "weird", "fast", "amazing"]
}
for (let key in options) {
    madLib = madLib.replaceAll(key, oneOf(options[key]))
}
console.log(madLib)
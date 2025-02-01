const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney',
}

const perth = {
    name: 'Perth',
    population: 2_309_338,
    state: 'WA',
    founded: '4 June 1829',
    timezone: 'Australia/Perth'
}

function cityDetails(city) {
    let htmlList = ""
    for (let key in city) {
        console.log(`${key}: ${city[key]}`)
        htmlList += `<li>${key}: ${city[key]}</li>`
    }

    return `<ul>${htmlList}</ul>`
}

cityDetails(sydney)
cityDetails(perth)
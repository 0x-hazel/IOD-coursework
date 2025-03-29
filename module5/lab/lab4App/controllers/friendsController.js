const friends = require("../models/friends");

function find(id) {
    return friends.find((value) => value.id == id);
}

function filter(gender = null, letter = null) {
    let matchingFriends = [...friends];

    if (gender !== null) {
        matchingFriends = matchingFriends.filter((friend) =>
            friend.gender == gender
        );
    }
    if (letter !== null) {
        matchingFriends = matchingFriends.filter((friend) =>
            friend.name.startsWith(letter)
        );
    }

    return matchingFriends;
}

function info(headers) {
    return {
        "user-agent": headers["user-agent"],
        "content-type": headers.accept,
        "accept-language": headers["accept-language"],
        "accept-encoding": headers["accept-encoding"],
    };
}

function add(newFriend) {
    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        return [500, {
            error: "Friend object must contain a name and gender",
        }];
    } else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend);
    return [200, newFriend];
}

module.exports = { find, filter, info };

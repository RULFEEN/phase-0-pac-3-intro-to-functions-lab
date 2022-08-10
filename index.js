function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
   // const checkForUpperCase = string === string.toUpperCase();
    const checkForLowerCase = string === string.toLowerCase();
    const neitherOne = string === "Let's have dinner together!"
    if (checkForLowerCase) {
        return 'I can\'t hear you!';
    }
    else if (string === string.toUpperCase()) {
        return 'YES INDEED!';
    }
    else if (neitherOne) {
        return 'I would love to!';
    }
}
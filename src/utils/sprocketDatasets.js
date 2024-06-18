async function getJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

// players
const players = getJSON('https://f004.backblazeb2.com/file/sprocket-artifacts/public/data/players.json');
players.then((data) => {
    exports.players = data;
});

// members
const members = getJSON('https://f004.backblazeb2.com/file/sprocket-artifacts/public/data/members.json');
members.then((data) => {
    exports.members = data;
});

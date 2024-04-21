const fs = require('fs');
const path = require('path');

const directoryPath = 'images/Pixel_foods';

const cards = fs.readdirSync(directoryPath).map(filename => {
    return {
        img: path.join(directoryPath, filename),
        name: path.parse(filename).name
    };
});


cards.sort(() => Math.random() - 0.5); // sort array randomly
_12_cards = cards.slice(0, 12); // get first 12 elements

back_card_image = "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.vectortiles.com%2Frainbow-tile-patterns%2F&psig=AOvVaw3eP7pUqbbwYmV3UwusLM8a&ust=1713799580202000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOinpYvP04UDFQAAAAAdAAAAABAQ"

gridDisplay = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < _12_cards.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', back_card_image);
        card.setAttribute('data-id', i);
    }
}
createBoard();
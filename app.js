document.addEventListener('DOMContentLoaded', () => {
    const cards = [
                { img: 'images\\Pixel_foods\\Potato.png', name: 'Potato' },
                { img: 'images\\Pixel_foods\\Carrot.png', name: 'Carrot' },
                { img: 'images\\Pixel_foods\\Donut.png', name: 'Donut' },
                { img: 'images\\Pixel_foods\\Egg.png', name: 'Egg' },
                { img: 'images\\Pixel_foods\\Wheat_bread.png', name: 'Wheat_bread' },
                { img: 'images\\Pixel_foods\\Rye_flour.png', name: 'Rye_flour' },
                { img: 'images\\Pixel_foods\\Cheese.png', name: 'Cheese' },
                { img: 'images\\Pixel_foods\\Cucumber.png', name: 'Cucumber' },
                { img: 'images\\Pixel_foods\\Puding.png', name: 'Puding' },
                { img: 'images\\Pixel_foods\\Butter.png', name: 'Butter' },
                { img: 'images\\Pixel_foods\\Wheat_flour.png', name: 'Wheat_flour' },
                { img: 'images\\Pixel_foods\\Sweet_roll.png', name: 'Sweet_roll' },
                { img: 'images\\Pixel_foods\\Raw_beef.png', name: 'Raw_beef' },
                { img: 'images\\Pixel_foods\\Rye_bread.png', name: 'Rye_bread' },
                {
                    img: 'images\\Pixel_foods\\Fried_chicken_fillet.png',
                    name: 'Fried_chicken_fillet'
                },
                { img: 'images\\Pixel_foods\\Beef_steack.png', name: 'Beef_steack' },
                { img: 'images\\Pixel_foods\\Milk.png', name: 'Milk' },
                {
                    img: 'images\\Pixel_foods\\Chicken_fillet.png',
                    name: 'Chicken_fillet'
                },
                {
                    img: 'images\\Pixel_foods\\Vegetable_oil.png',
                    name: 'Vegetable_oil'
                },
                { img: 'images\\Pixel_foods\\Tomato.png', name: 'Tomato' }
            ];


cards.sort(() => Math.random() - 0.5); // sort array randomly
const _6_cards = cards.slice(0, 6);
const _6_cards_copy = _6_cards; 
console.log(_6_cards);
console.log(_6_cards_copy); 
const gridDisplay = document.querySelector('#grid');

const back_card_image = "images\\blank.png"

const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

_6_cards.concat(_6_cards_copy).forEach((card, i) => {
    const img = document.createElement('img');
    img.setAttribute('src', back_card_image);
    img.setAttribute('data-id', i);
    img.setAttribute('width', '100px');
    gridDisplay.appendChild(img);
    img.addEventListener('click', flipCard);
});

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images\\white.png')
        cards[optionTwoId].setAttribute('src', 'images\\white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        resultDisplay = cardsWon.length
    }
    else {
        cards[optionOneId].setAttribute('src', back_card_image)
        cards[optionTwoId].setAttribute('src', back_card_image)
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    if (cardsWon.length === _6_cards.length) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardId);
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length === 2 && cardsChosenId[0] !== cardsChosenId[1]) {
        setTimeout(checkForMatch, 500)
    }
}
})
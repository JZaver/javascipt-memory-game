document.addEventListener('DOMContentLoaded', () => {

    //card options 
    const cardArray = [
        {
            name: 'cordelia',
            img: 'images/cordelia.jpg'
        },
        {
            name: 'cordelia',
            img: 'images/cordelia.jpg'
        },
        {
            name: 'cynthia',
            img: 'images/cynthia.jpg'
        },
        {
            name: 'cynthia',
            img: 'images/cynthia.jpg'
        },
        {
            name: 'gaius',
            img: 'images/gaius.jpg'
        },
        {
            name: 'gaius',
            img: 'images/gaius.jpg'
        },
        {
            name: 'henry',
            img: 'images/henry.jpg'
        },{
            name: 'henry',
            img: 'images/henry.jpg'
        },
        {
            name: 'inigo',
            img: 'images/inigo.jpg'
        },
        {
            name: 'inigo',
            img: 'images/inigo.jpg'
        },
        {
            name: 'olivia',
            img: 'images/olivia.jpg'
        },
        {
            name: 'olivia',
            img: 'images/olivia.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/cover.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    };

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/cover.jpg')
            cards[optionTwoId].setAttribute('src', 'images/cover.jpg')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Yay! You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/cover.jpg')
            cards[optionTwoId].setAttribute('src', 'images/cover.jpg')
            alert('Ooh, sorry...try again.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'You found all of the matches! You are a memory champion!'
        }
    };


    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
        }

    };

    createBoard();

});
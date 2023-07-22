//

//import

import cards from "../data/cards.js";
import createCategory from "../js/createCategory.js";
import createBurgerMenu from "../js/createBurgerMenu.js";
import createCards from "../js/createCards.js";
import play from "../js/playMode.js"

var param,
    mode = 0
let mainContainer = document.getElementById('card-container')
const categories = document.getElementsByClassName('category'),
    modeChanger = document.getElementById('change-mode'),
    linkContainer = document.getElementById('nav'),
    links = document.getElementsByClassName('burger-a'),
    playBtn = document.getElementById('play')

function init (){
    createCategory(cards, mainContainer)
    connectLink()
    createBurgerMenu(cards, linkContainer)
    addEvents()
    playBtn.onclick =
    modeChanger.onclick = changeMode
}

function connectLink(){
    for (let i = 0; i < categories.length; i++){
        categories.item(i).addEventListener("click", function(){
            param = i + 1
            createCards(cards, mainContainer, param)
            mainContainer = document.getElementById('card-container')
        })
    }
}

function addEvents(){
    links.item(0).addEventListener("click", function(){
        console.log('work')
        createCategory(cards, mainContainer)
        connectLink()
        mainContainer = document.getElementById('card-container')
    })
    for (let i = 1; i < links.length; i++){
        links.item(i).addEventListener("click", function(){
            param = i
            createCards(cards, mainContainer, param)
            mainContainer = document.getElementById('card-container')

        })
    }
}

function changeMode(){
    if (mode === 0) {
        mode = 1
    } else {
        mode = 0
    }
}

function playOrTrain(){
    
}

window.onload = init
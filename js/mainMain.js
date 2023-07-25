// function loadScript(src){
//     return new Promise(function(resolve, reject){
//         let script = document.createElement('script')
//         script.src = src
//         script.type = "module"
//
//         script.onload = () => resolve(script)
//         script.onerror = () => reject(new Error(`Ошибка загрузки ${src}`))
//         document.head.append(script)
//     })
// }
//
// let promiseCards = loadScript('../data/cards.js')
// promiseCards.then(
//     script => console.log(`${script.src} loaded`),
//     error => console.log(`error`)
// )
// let promiseCreateCategories = loadScript('../js/createCategory.js')
// promiseCreateCategories.then(
//     script => console.log(`${script.src} loaded`),
//     error => console.log(`error`)
// )
// let promiseCreateCards = loadScript('../js/createCards.js')
// promiseCreateCards.then(
//     script => console.log(`${script.src} loaded`),
//     error => console.log(`error`)
// )

//import

import cards from "../data/cards.js";
import createCategory from "../js/createCategory.js";
import createBurgerMenu from "../js/createBurgerMenu.js";
import createCards from "../js/createCards.js";
import play from "../js/playMode.js"

var param,
    audioArray,
    mode = false
//false - train
//true - play
let mainContainer = document.getElementById('card-container')
const categories = document.getElementsByClassName('category'),
    modeChanger = document.getElementById('change-mode'),
    linkContainer = document.getElementById('nav'),
    links = document.getElementsByClassName('burger-a'),
    playBtn = document.getElementById('play')

function init (){
    console.log(mainContainer)
    createCategory(cards, mainContainer)
    connectLink()
    mainContainer = document.getElementById('card-container')
    createBurgerMenu(cards, linkContainer)
    addEvents()
    modeChanger.onclick = changeMode

}

function connectLink(){
    for (let i = 0; i < categories.length; i++){
        categories.item(i).addEventListener("click", function(){
            param = i + 1
            createCards(cards, mainContainer, param, playBtn)
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
            createCards(cards, mainContainer, param, playBtn)
            mainContainer = document.getElementById('card-container')

        })
    }
}

function changeMode(){
    window.mode = !window.mode;
}

window.onload = init
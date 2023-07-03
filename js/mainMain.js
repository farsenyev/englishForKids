function loadScript(src){
    return new Promise(function(resolve, reject){
        let script = document.createElement('script')
        script.src = src
        script.type = "module"

        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`Ошибка загрузки ${src}`))
        document.head.append(script)
    })
}

let promiseCards = loadScript('../data/cards.js')
promiseCards.then(
    script => console.log(`${script.src} loaded`),
    error => console.log(`error`)
)
let promiseCreateCategories = loadScript('../js/createCategory.js')
promiseCreateCategories.then(
    script => console.log(`${script.src} loaded`),
    error => console.log(`error`)
)
let promiseCreateCards = loadScript('../js/createCards.js')
promiseCreateCards.then(
    script => console.log(`${script.src} loaded`),
    error => console.log(`error`)
)

//import

import cards from "../data/cards.js";
import createCategory from "../js/createCategory.js"
import createCards from "../js/createCards.js";

var param
const categories = document.getElementsByClassName('category'),
      mainContainer = document.getElementById('card-container')

function init (){
    createCategory(cards, mainContainer)
    addEvents()
}

function addEvents(){
    console.log('work')
    for (let i = 0; i < categories.length; i++){
        categories.item(i).addEventListener("click", function(){
            param = i + 1
            createCards(cards, mainContainer, param)
        })
    }
}


window.onload = init
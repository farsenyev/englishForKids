let playedElem
export default function createCards(arr, parentElem, param, btnToStart){
    const container = document.createElement('section')
    container.classList.add('main')
    container.id = 'card-container'
    for (let i = 0; i < arr[param].length; i++){
        let card = document.createElement('section')
        card.classList.add('card')
        card.id = arr[param][i].word

        let img = document.createElement('img')
        img.classList.add('card-img')
        img.src = arr[param][i].image

        card.append(img)
        card.addEventListener("click", function(){
            onCardClick(arr, param, card, arr[param][i])
        })
        if (!window.mode){
            let txt = document.createElement('p')
            txt.classList.add('text')
            txt.textContent = arr[param][i].word
            let trans = document.createElement('p')
            trans.classList.add('text')
            trans.textContent = arr[param][i].translation
            card.append(txt, trans)
        }
        container.append(card)
    }
    if(window.mode){
        btnToStart.replaceWith(btnToStart.cloneNode(true))
        btnToStart = document.getElementById('play')
        btnToStart.addEventListener("click", function(){
            play(arr, param)
        })
    }
    parentElem.replaceWith(container)
}

function onCardClick (arr, param, elem, cardObj){
    if(window.mode){
        if (cardObj.word === playedElem.word){
            playedElem.correct ++
        }else{
            playedElem.incorrect ++
        }
        const indexInCards = arr[param].findIndex(c => c.word === playedElem.word)
        const index = window.audioArray.findIndex(c => c === indexInCards)
        if (index !== -1 && index < 7){
            playedElem = arr[param][window.audioArray[index+1]]
            new Audio(playedElem.audioSrc).play()
        }else if(index >= 7){
            alert('Well done!')
        }
    }else{
        elem.addEventListener("click", function(){
            new Audio(cardObj.audioSrc).play()
        })
    }
}

function congratulation(){
    let popup = document.createElement('section')
    popup.classList.add('congratulation')

    let text = document.createElement('p')
    text.classList.add('congr-text')
    text.textContent = 'Congratulation'

}

function play(arr, param){
    window.audioArray = randomizer(arr[param].length)
    playedElem = arr[param][window.audioArray[0]]
    new Audio(playedElem.audioSrc).play()
}

function randomizer(b){
    let result = []
    while (result.length < b){
        let number = Math.floor(Math.random() * b)
        if (result.find(elem => elem === number) === undefined){
            result.push(number)
        }
    }
    return result
}
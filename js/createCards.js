export default function createCards(arr, parentElem, param){
    const container = document.createElement('section')
    container.classList.add('main')
    container.id = 'card-container'
    for (let i = 0; i < arr[param].length; i++){
        let card = document.createElement('section')
        card.classList.add('card')

        let img = document.createElement('img')
        img.classList.add('card-img')
        img.src = arr[param][i].image

        let rotateBtn = document.createElement('button')
        rotateBtn.classList.add('rotate-btn')

        card.append(img, rotateBtn)
        container.append(card)
    }
    parentElem.replaceWith(container)
    console.log(param)
    addAudio(arr, param)
    // rotateCard(arr, param)

}

function addAudio(arr, param) {
    let words = document.getElementsByClassName('card')
    for (let i = 0; i < words.length; i++){
        words.item(i).addEventListener("click", function(){
            new Audio(arr[param][i].audioSrc).play()
        })
    }
}

function rotateCard(arr, param){
    let words = document.getElementsByClassName('card')
    let btns = document.getElementsByClassName('rotate-btn')
    for (let i = 0; i < btns.length; i++){
        btns.item(i).addEventListener("click", function(){
            words.item(i).style.transform = "rotate(-180deg) translateZ(1px)"

        })
    }

}
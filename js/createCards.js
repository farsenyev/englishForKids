export default function createCards(arr, parentElem, param){
    const container = document.createElement('section')
    container.classList.add('card-container')
    console.log(arr.length)
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
}
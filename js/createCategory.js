export default function createCategory(arr, parentElem){
    for (let i = 1; i < arr.length; i++){
        let card = document.createElement('section')
        card.classList.add('category')

        let txt = document.createElement('h3')
        txt.classList.add('category-name')
        txt.textContent = arr[0][i-1]

        let img = document.createElement('img')
        img.classList.add('img-category')
        img.src = arr[i][0].image

        card.append(txt, img)
        parentElem.append(card)
    }
}
export default function createBurgerMenu(arr, parentElem){
    let main = document.createElement('a')
    main.classList.add('burger-a')
    main.textContent = "Main Page"
    parentElem.append(main)
    for (let i = 0; i < arr[0].length; i++){
        let link = document.createElement('a')
        link.classList.add('burger-a')
        link.textContent = arr[0][i]
        parentElem.append(link)
    }
}
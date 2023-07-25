export default function play(arr, param){
    window.audioArray = randomizer(8)
    new Audio(arr[param][audioArray[0]].audioSrc).play()

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
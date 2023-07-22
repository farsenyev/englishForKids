export default function play(arr, param, answer, buttons){
    let array = randomizer(arr[param].length)
    while (array.length > 0) {
        let score = 0
        new Audio(arr[param][array[0]].audioSrc).play()
        //incorrect answer


        //correct answer
        buttons.item(array[0]).addEventListener("click", function(){
            score ++
            console.log(score)
        })

        array.shift()
    }
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
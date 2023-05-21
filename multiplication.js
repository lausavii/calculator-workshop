
let calculatorForm = document.getElementById('calculator-form')
console.log(calculatorForm)

let inputX = document.getElementById('number-x')
console.log(inputX)


let inputY = document.getElementById('number-y')

let resultElement = document.getElementById('result')

function onCalculate (event) {
    event.preventDefault()
    console.log(inputX.value)
    console.log(inputY.value)

    let multiply = Number(inputX.value) *  Number(inputY.value)
    console.log (multiply)

    console.log(result)
    console.log(resultElement.innerHTML)
    resultElement.innerHTML = "<h4>" + multiply + "</h4>"
}

calculatorForm.onsubmit = onCalculate

console.log("if you see this then it works")

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

    let sum = Number(inputX.value) +  Number(inputY.value)
    console.log (sum)

    console.log(result)
    console.log(resultElement.innerHTML)
    resultElement.innerHTML = "<h4>" + sum + "</h4>"
}

calculatorForm.onsubmit = onCalculate



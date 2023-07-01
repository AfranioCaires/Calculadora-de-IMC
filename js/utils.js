export {notANumber, calculateIMC}

function notANumber (value){
    return isNaN(value) || value == ""
}

function calculateIMC(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2)
}


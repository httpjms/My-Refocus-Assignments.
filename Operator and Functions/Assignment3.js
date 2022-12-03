
//Task 1

        //1. Declare the function
        //2. Use the formula K = C + 273.15. K = (F - 32)*5/9 + 273.15 Store in a new variable
        //3. Return the value

function convertCelsiusToKelvin(tempCelsius) {
    let tempCelsiusToKelvin = tempCelsius + 273.15;
    return tempCelsiusToKelvin;
}

console.log(convertCelsiusToKelvin(84)) // 84 F = 28.89 C
console.log(convertCelsiusToKelvin(95)) // 95 F = 35 C

function convertFahrenheitToKelvin(tempFahrenheit){
    let tempFahrenheitToKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    return tempFahrenheitToKelvin;

}

console.log(convertFahrenheitToKelvin(84))
console.log(convertFahrenheitToKelvin(95))



//Task 2

function computeTip(totalBill){

    let amountToPay = totalBill * .10;
    return amountToPay;
}

console.log(computeTip(500))
console.log(computeTip(1000))
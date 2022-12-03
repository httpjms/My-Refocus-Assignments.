	
//BMI Categories:
//Underweight = <18.5
//Normal weight = 18.5–24.9
//Overweight = 25–29.9
//Obesity = BMI of 30 or greater

function calculateBMI (weight, height){
    var bmi = (weight / (height ** 2) )* 10000 ;
        let n = bmi.toFixed(2)
        if (n < 18 ){
            console.log("You're Underweight");
        }
        else if(n >= 18 && bmi <25 ) {
            console.log(" You're Normal Weight");
        } else if(b = 25 && n < 30){
            console.log("You're overweight.")
        } else {
            console.log("Obesity")
        }
    
}

calculateBMI(52, 163)
var result;
var bmi;
function calculateBMI (a, b){
     bmi = (a / (b ** 2) )* 10000 ;
    let n = bmi.toFixed(2);
   
        if (n < 18 ){
            result = `You're Underweight \n`;
        }
        else if(n >= 18 && bmi <25 ) {
            result = `You're Normal Weight. \n`;
        } else if(n = 25 && bmi < 30){
            result = `You're overweight. \n`
        } else {
            result = `Obesity. \n`
        }
        
        console.log(`Your current weight is: ${n}. \n`);
        console.log(result);
        console.log("Please see below Chart for your reference: ");
        console.log("BMI Categories: ");
        console.log("Underweight = < 18.5");
        console.log("Normal = 18.5 - 24.5");
        console.log("Overweight = 25 - 29.9");
        console.log("Obesity = 30 or greater");
        return bmi;
 
}



calculateBMI(52, 163)
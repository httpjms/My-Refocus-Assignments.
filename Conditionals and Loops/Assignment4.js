//task 1

var oxygenLevel = 100;
function checkOxygenLevel(oxygenLevel){
    if(oxygenLevel > 95){
        console.log(`Normal Reading`);
    } else if (oxygenLevel == 95){
        console.log(`Acceptable to continue home monitoring`);
    } else if (oxygenLevel >= 92 && oxygenLevel <95){
        console.log(`Seek advise from health professionals.`);
    } else {
        console.log(`Seek urgent medical advise.`);
    }
    
}

checkOxygenLevel(oxygenLevel)

//task 2
var pulseRate = 50;
function checkPulseRate(pulseRate){
    if (pulseRate >= 40 && pulseRate <= 100){
        console.log(`Normal Reading`);
    } else if (pulseRate >= 101 && pulseRate <= 109){
        console.log(`Acceptable to continue home monitoring`);
    } else if (pulseRate >= 110 && pulseRate <= 130){
        console.log(`Seek advise from health professionals.`);
    } else{
        console.log(`Seek urgent medical advise`);
    }
    
}
checkPulseRate(pulseRate)
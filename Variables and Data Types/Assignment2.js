//Task1

let caloriesPerMinute = 225;
let cyclingTimes = 15;
let workOutMiute = 0.5;

let totalCaloriesLost = caloriesPerMinute * workOutMiute * cyclingTimes;
// console.log(totalCaloriesLost);
// console.log(minutesperHour);
console.log(`Great work, Sam! After ${workOutMiute} hours of cycling everyday for a week, you may lose a total of ${totalCaloriesLost} calories`);

// Task 2 Saving App

let savingsGoal = 10000;
let savedMoney = 7500;
let percentageLeft = (1 - (savedMoney/savingsGoal)) * 100;
//console.log(percentageLeft)
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentageLeft}% away from your goal of saving ₱${savingsGoal}.`);
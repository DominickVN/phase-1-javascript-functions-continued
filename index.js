// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");


const mondayWork = function (activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
}
mondayWork();


const wrapAdjective = function (flair = '*') {
    return function (singleParameter = "special") {
        return `You are ${flair}${singleParameter}${flair}!`;
    }
    
}
wrapAdjective();
// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = '*'){
    return function (something = 'special'){
        return `You are ${string}${something}${string}!`
    }
}
const encouragingPromptFunction = wrapAdjective("*");
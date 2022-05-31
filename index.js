const defaultActivity = 'roller-skate';
const myActivity = 'bathe my dog';

function saturdayFun(activity) {
    if (activity === myActivity) {
        return `This Saturday, I want to ${myActivity}!`;
    }
    
    else {
        return `This Saturday, I want to ${defaultActivity}!`;
    }
}

const mondayActivity = 'go to the office';
const myMondayActivity = 'work from home';

function mondayWork (activity) {
    if (activity === myMondayActivity) {
        return `This Monday, I will ${myMondayActivity}.`;
    }
    
    else {
        return `This Monday, I will ${mondayActivity}.`;
    }
}

function wrapAdjective (flair = "*") {
    return function (adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`
    }
}
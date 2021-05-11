function solution(Y, A, B, W) {
    // write your code in JavaScript (Node.js 8.9.4)
    let startVacation = new Date(`${A} ${Y}`);
    let endVacation = new Date(Y, new Date(`${B} ${Y}`).getMonth()+1);

    // Get the first Monday in the month
    if(startVacation.getDay()===1){
        startVacation.setDate(startVacation.getDate() + 6);
    }else {
        startVacation.setDate(startVacation.getDate() + (7-startVacation.getDay()) + 1)
    }

    if(endVacation.getDay()===0){
        endVacation.setDate(endVacation.getDate() - 6);
    }
    else{
        endVacation.setDate(endVacation.getDate() - endVacation.getDay());
    }

    // Find the number of days between start vacation and end vacation
    const days = (endVacation.getTime() - startVacation.getTime())/(1000*3600*24);

    // Find the number of weeks between start vacation and end vacation
    const weeks = Math.round(days/7);
    
    return weeks;
}

console.log(solution(2014,"April","May","Wednesday"));
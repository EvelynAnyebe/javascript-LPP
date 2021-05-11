
function solution(A, B, P) {
    // write your code in JavaScript (Node.js 8.9.4)
    let matchName = [];
    for (i=0; i<A.length; i++){
        if(B[i].search(P) !== -1){
            matchName.push(A[i]);
        }
    }
    if(!matchName.length){
        return "NO CONTACT";
    }else if(matchName.length==1){
        return matchName[0];
    }else{
        return matchName.sort()[0];
    }

    }

console.log(solution(["A","B","C"],["0","00","000"],"9"));
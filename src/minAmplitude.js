
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let l=A.length-1;
    if(l===K){
        return Math.max(A)-Math.min(A)
    }
    let prevAmplitude=Math.max(...A)-Math.min(...A)
    let i=0;
    while((l-i)>=K){
        
        const currentArr=[...A.slice(0,i),...A.slice(K+i)]
        let currentAmplitude=Math.max(...currentArr)-Math.min(...currentArr)
        
        if(currentAmplitude<prevAmplitude)  prevAmplitude=currentAmplitude

        i++
    }

    return prevAmplitude
}

console.log(solution([5,3,6,1,3],2))
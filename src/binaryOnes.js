function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    //convert to binary
    const binaryStr=(A*B).toString(2);
    console.log(binaryStr)
    const stringChr = binaryStr.split('');

    // count the number of 1's
    count=0;
    for(let ch of stringChr){
        if(ch==='1') count++;
    }

    return count;
}

console.log(solution(3,7))
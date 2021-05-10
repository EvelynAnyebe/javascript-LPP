// Find the smallest positive integer not in array.
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // find the maximum
    // loop through the array from 1 to max and check if the next value exist
    // If maximum < =0 return 1

    const max = Math.max.apply(null,A);
    if(max<=0){
        return 1;
    }
    for(i=1; i<=max; i++){
        if(A.indexOf(i) === -1){
            return i;
        }
    }

    return max+1;
}

// time complexity O(n**2). How to make it better. 

console.log(solution([0,1,2,3,4,5,6,9,10,11,12,8,7]));
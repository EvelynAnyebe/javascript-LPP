function median(arr){
    const mid=Math.floor(arr.length/2)
    nums = [...arr].sort((a,b)=>a-b);
    return arr.length%2!==0?nums[mid]:Math.floor(nums[mid-1]+nums[mid])/2
}
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const medianNum=median(A);
    let count=0;
    for(let num of A){
        let current=num;
        if(current===medianNum){
            continue;
        }else if(current<medianNum){
            while(current<medianNum){
                current++
                count++
            }
        }else{
            while(current>medianNum){
                current--
                count++
            }
        }    
    } 
    return count;  
}

console.log(solution([3,2,1,1,2,3,1]))
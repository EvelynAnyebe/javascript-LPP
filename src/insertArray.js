// Insert a value into an array at a specific index
function insertArray(arr,value,index){
    let i=arr.length;

    if(index<0 || index>=i){
        return "INDEX OUT OF BOUND";
    }

    for (i; i>(index-1); i--){
        arr[i]=arr[i-1];
    }
    arr[index]=value;

    return arr;
}

/*
 * What is the time complexity?
 * This is O(n-(index-1)) which represents the number of iterations of the for loop. The index to 
 * It is a linear time complexity. 
 */



// Recursion


console.log(insertArray([1,2,3,4,5,0],3));


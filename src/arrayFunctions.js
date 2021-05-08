// Insert a value into an array at a specific index
function insertArray(arr,value,index){
    let i=arr.length;

    if(index<0 || index>=i){
        return "INDEX OUT OF BOUND";
    }

    for (i; i>index; i--){
        arr[i]=arr[i-1];
    }
    arr[index]=value;

    return arr;
}

// Find pairs in array that adds up to a given number
function pairSum(arr,sumValue){
    let result = [];
    let myMap = {};

    arr.map(v => {
        if(v in myMap){
            result.push([v,myMap[v]]);
        }

        let x = sumValue-v;
        myMap[x] = v;

    });

    return result;

}

// Recursion


// Quick sort
// if(arr.length < 2) return arr[0]
// first = arr[0]
// left = all values less than first
// right = all values greater than first
// return a combined array [left, first, right]

console.log(pairSum([1,2,3,4,5,0],3));


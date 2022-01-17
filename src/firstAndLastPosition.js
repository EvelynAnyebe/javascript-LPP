/**
 * Given a sorted array of integers arr and an integer target,
 * find the index of the first and last position of target in arr. If target can't be found in arr,
 * return [-1,-1]
 */

const firstAndLast=(arr,target)=>{
    for(i=0; i<arr.length; i++){
        if(arr[i]===target){
            start=i;
            while ((i+1)< arr.length && arr[i+1]===target){
                i+=1
            }
            return [start,i]
        }
    }

    return [-1,-1]
}

//Binary search approach
function find_start(arr,target){
    if(arr[0]===target){
        return 0
    }
    let left=0
    let right = arr.length-1
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]===target &&  arr[mid-1]<target)
            return mid
        else if(arr[mid]<target)
            left = mid+1
        else
            right = mid-1       
    }
    return -1
}

function find_end(arr,target){
    if(arr[arr.length-1]===target){
        return arr.length-1
    }
    let left=0
    let right = arr.length-1
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]===target &&  arr[mid+1]>target)
            return mid
        else if(arr[mid]>target)
            right = mid-1
        else
            left = mid+1       
    }
    return -1
}

const firstAndLastBinary=(arr,target)=>{
    if(!arr.length || arr[0]>target || arr[-1]<target){
        return [-1,-1]
    }
     return [find_start(arr,target), find_end(arr,target)]
}


console.log(firstAndLastBinary(['n','a','m','e','l','e','s','s'],"s"));
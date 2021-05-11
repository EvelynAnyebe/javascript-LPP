// Quick sort
// if(arr.length < 2) return arr[0]
// first = arr[0]
// left = all values less than first
// right = all values greater than first
// return a combined array [left, first, right]
function quickSort(arr) {
  try {
    if (arr.length < 2) {
      return arr;
    }
    const first = arr[0];
    let left = [];
    let right = [];

    for (i=1; i<arr.length; i++) {
      if (arr[i]< first) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left),first,...quickSort(right)];
  } catch (e) {
    console.log(e);
  }
}

// What is the time complexity 

console.log(quickSort([0,1,2,3,4,5,6,9,10,11,12,8,7]));

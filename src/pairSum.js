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

onsole.log(pairSum([1,2,3,4,5,0],3));
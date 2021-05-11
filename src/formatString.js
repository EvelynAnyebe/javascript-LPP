function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  //Replace Spacial characters
  const numberOnlyStr = S.replace(/[\W]/g, "");

  if (numberOnlyStr <= 2) {
    return numberOnlyStr;
  }

  let arrString = [];
  let j = 1;
  for (character of numberOnlyStr) {
    if (j < 3) {
      arrString.push(character);
      j += 1;
    } else if (j === 3) {
      arrString.push(character);
      arrString.push("-");
      j = 1;
    }
  }
  if(arrString[arrString.length-1]==='-'){
      arrString.pop();
  }


  if (numberOnlyStr.length % 3 === 1) {
    const l = arrString.length;
    arrString[l - 2] = arrString[l - 3];
    arrString[l - 3] = "-";
  }


  return arrString.join("");
}

console.log(solution("0 - 22 1985--324"));

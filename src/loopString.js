function vowelsAndConsonants(s) {
  let consonants = [];
  let vowels=[];
  for (let letter of s) {
    switch (letter.toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowels.push(letter);
        break;
      default:
        consonants.push(letter);
    }
  }

  console.log(vowels);
  console.log(consonants);
}

function vowelsAndConsonantsIf(s) {
  let consonants = [];
  let vowels = [];
  for (let letter of s.toLowerCase()) {
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
    )
    vowels.push(letter);
    else consonants.push(letter);
  }

  console.log(vowels);
  console.log(consonants);
}

function vowelsAndConsonantsAlt(s) {
  let consonants = [];
  let vowels = [];
  for (let letter of s) {
    if (["a", "e", "o", "i", "u"].includes(letter.toLowerCase())) {
      vowels.push(letter);
    } else consonants.push(letter);
  }

  console.log(vowels);
  console.log(consonants);
}

console.time("vowelsAndConsonants");

vowelsAndConsonants("Evelyn");

console.timeEnd("vowelsAndConsonants");

//TEST IF
console.time("vowelsAndConsonantsIf");

vowelsAndConsonantsIf("Evelyn");

console.timeEnd("vowelsAndConsonantsIf");

//TIME ALT METHOD
console.time("vowelsAndConsonantsAlt");

vowelsAndConsonantsAlt("Evelyn");

console.timeEnd("vowelsAndConsonantsAlt");

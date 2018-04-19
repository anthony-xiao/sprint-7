//Minimum
let min = (a, b) => {
    if (b < a) return b;
    else return a;
}

//Recursion
let isEven = (n) => {
    if (n === 0) {
        return true
    } else if (n === 1) {
        return false
    } else if (n > 1) {
        return n = isEven (n - 2)
    } else if (n < 0) {
        return n = isEven (n + 2)
    }
}



//Bean Counting
let countChar = (string, character) => {
    let charCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            charCount++
        }
    }
  return charCount++
}

let countBs = (string) => {
    return countChar (string, "B");
}
    


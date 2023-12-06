// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift > 25 || shift < -25) return false;
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const arr = input.split(" ");
    const result = [];
    arr.forEach((word) => {
      let newWord = "";
      for (const char of word.toLowerCase()) {
        const indexA = alphabets[(alphabets.indexOf(char) - shift + 26) % 26];
        const indexB = alphabets[(alphabets.indexOf(char) + shift + 26) % 26];
        if (!alphabets.includes(char)) {
          newWord += char;
          continue;
        }
        if (encode == false) {
          if (shift < 0) newWord += indexA;
          if (shift > 0) newWord += indexA;
        } else if (shift > 0) {
          newWord += indexB;
        } else if (shift < 0) {
          newWord += indexB;
        }
      }
      result.push(newWord);
    });
    return result.join(" ");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

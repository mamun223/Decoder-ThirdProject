// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // Just for pull request practice

  function substitution(input, alphabet, encode = true) {
    
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const tempArray = [];
    if (!alphabet || alphabet.length !== 26) return false;
    for (char of alphabet) {
      if (tempArray.includes(char)) return false;
      tempArray.push(char);
    }

    let encodedDecoded = "";

    if (encode === false) {
      for (char of input) {
        char === " "
          ? (encodedDecoded += char)
          : (encodedDecoded += alphabets[alphabet.indexOf(char)]);
      }
      return encodedDecoded;
    }

    for (char of input) {
      char === " "
        ? (encodedDecoded += char)
        : (encodedDecoded += alphabet[alphabets.indexOf(char)]);
    }

    return encodedDecoded;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

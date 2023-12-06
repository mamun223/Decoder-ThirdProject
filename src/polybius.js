// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const matrix = [
    ["0", "1", "2", "3", "4", "5"],
    ["1", "a", "b", "c", "d", "e"],
    ["2", "f", "g", "h", "i/j", "k"],
    ["3", "l", "m", "n", "o", "p"],
    ["4", "q", "r", "s", "t", "u"],
    ["5", "v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    const noSpaceInput = input.replace(/\s/g, "");
    let encodedDecoded = "";
    const letterPair = "i/j";
    const numberPair = "42";
    const arrayOfPairedNumbers = [];

    if (noSpaceInput.length % 2 !== 0 && /^\d+$/.test(noSpaceInput))
      return false;

    if (encode == false) {
      for (let i = 0; i < input.length - 1; i += 2) {
        const numberString = input[i];
        if (numberString === " ") {
          arrayOfPairedNumbers.push(numberString);
          i -= 1;
        } else arrayOfPairedNumbers.push(numberString + input[i + 1]);
      }

      arrayOfPairedNumbers.forEach((pairedChar) => {
        if (pairedChar === " ") {
          encodedDecoded += pairedChar;
        } else
          encodedDecoded +=
            matrix[pairedChar[1]][matrix[0].indexOf(pairedChar[0])];
      });

      return encodedDecoded;
    }

    for (char of input) {
      if (char === " ") encodedDecoded += " ";
      if (letterPair.includes(char)) encodedDecoded += numberPair;

      for (let index in matrix) {
        const arr = matrix[index];
        const firstArrayOfMatrix = matrix[0];

        if (arr.includes(char)) {
          encodedDecoded += firstArrayOfMatrix[arr.indexOf(char)] + arr[0];
        }
      }
    }
    return encodedDecoded;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

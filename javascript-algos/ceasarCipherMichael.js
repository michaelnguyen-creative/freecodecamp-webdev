function rot13(str) {
  const processedStr = str.replace(/\s/g, " ").split("");
  // charcode of A-Z is 65-90, 77 is the median
  // Rotate by 13 places (Mapping)
  const rotatedMap = processedStr.map(char => {
    const charCode = char.charCodeAt(0);
    if ( charCode >= 65 && charCode <= 77) {
      return charCode + 13
    } else if (charCode > 77 && charCode <= 90) {
      return charCode - 13
    } else {
      return charCode
      }
  });

  return rotatedMap
  .map(code => String.fromCharCode(code)).join("");
} 
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
//console.log("!".charCodeAt(0))
//console.log(String.fromCharCode(82));
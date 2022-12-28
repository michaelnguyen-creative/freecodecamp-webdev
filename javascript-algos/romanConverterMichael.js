function convertToRoman(num) {
  // Mapping Arabic numerals to equivalent Roman numbers
  const romanMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];
  let roman = "";

  // Iterate through the map and do the calculation
  for (let i = 0; i < romanMap.length; i++) {
    // substracting num by corresponding value
    // stop when num = 0
      while (num >= romanMap[i][1]) {
        roman += romanMap[i][0]
        num -= romanMap[i][1]
        //console.log("Current num is", num)
        //console.log(roman)
      }
  }
  //console.log("Converted:", roman);
  return roman;
}

convertToRoman(36);
convertToRoman(29);
convertToRoman(99);
convertToRoman(1000);
convertToRoman(2014)
convertToRoman(3999);
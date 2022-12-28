function telephoneCheck(str) {
  // Function to check for phone number length
  const lengthCheck = function (inputStr) {
    const numberLength = inputStr.match(/\d/g).length;
    // length must either 10 or 11 (starts with 1)
    return numberLength == 10 ? true
    : (/^1/).test(inputStr) && numberLength == 11 ? true
    : false
  }

  // Function to check for parentheses in area code digit group
  const parenthesesCheck = (inputStr) => {
    // Whether have or doesn't have parentheses
    const parentheses = inputStr.match(/\(\d{3}\)/g);
    const noParentheses = inputStr.match(/[\(\)]/g);
    // Checkpoint for null when no match found
    return noParentheses == null ? true
    : noParentheses.length > 2 ? false
    : parentheses !== null && parentheses.length == 1 ? true
    : false
  }

  // Function to check for delimiter
  const delimiterCheck = (inputStr) => {
    // Groups are delimited by spaces and/or hyphens
    const noDelimiter = inputStr.match(/[ -]/g);
    const delimiter = inputStr.match(/(?<=\d{3})[ -](?=\d{4}$)/g);
    return noDelimiter == null ? true
    : delimiter !== null && delimiter.length == 1 ? true
    : false
  }
  
  // My approach
  return lengthCheck(str) && parenthesesCheck(str) && delimiterCheck(str) ? true
  : false;
  
}
//console.log()
console.log(telephoneCheck("555-555-5555")); //t
console.log(telephoneCheck("1(555)555-5555")); //t
console.log(telephoneCheck("1 (555) 555-5555")); //t
console.log(telephoneCheck("1 555)555-5555")); //f
console.log(telephoneCheck("123**&!!asdf#")); //f
console.log(telephoneCheck("2 (757) 622-7382")); //f
console.log(telephoneCheck("10 (757) 622-7382")); //f
console.log(telephoneCheck("27576227382")); //f
console.log(telephoneCheck("(555)5(55?)-5555")); //f
console.log(telephoneCheck("55 55-55-555-5"));
//console.log(("55 55-55-555-5").match(/(?<=\d{3})[ -](?=\d{4}$)/g));
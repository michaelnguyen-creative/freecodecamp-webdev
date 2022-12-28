function palindrome(str) {
  // Process input str first
  const processedStr = str.replace(/\W|_/g, "").toLowerCase();
  return processedStr == processedStr.split("").reverse().join("");
}

palindrome("eye");
palindrome("_eye");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
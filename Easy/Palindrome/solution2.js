function Palindrome(str){
  return str.split(" ").join("").split("").reverse().join("") === str.replace(/\s/gi, "");
}
console.log(Palindrome("race car"));

function vowelCount(str){
  return str.match(/[aeiou]/gi).length;
}
console.log(vowelCount("All cows eat grass"));

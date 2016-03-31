function firstReverse(input){
  var newInput = "";
  for(var i = input.length - 1; i>=0; i--){
    newInput += input.charAt(i);
  }return newInput;
}

str = "coderbyte";
str = "I Love Code";

console.log(firstReverse(str));

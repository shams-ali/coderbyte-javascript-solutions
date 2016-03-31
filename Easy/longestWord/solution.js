function longestWord(input){
  return input.match(/[a-z]+/gi).reduce(function(acc, curr){
    if(curr.length>acc.length){return curr;}
    else{return acc;}
  });
}

var str = "Hi, how ares you.";
console.log(longestWord(str));

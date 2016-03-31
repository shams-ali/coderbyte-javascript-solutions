function letterChanges(input) {
  return input.split("").map(function(x){
    if(x.match(/[a-z]/gi)){
      return x.toUpperCase() === "Z" ? "A" : String.fromCharCode(x.charCodeAt(x)+1);
    }else{return x;}
  }).map(function(y){
    if(y.match(/[aeiou]/g)){return y.toUpperCase();}else{return y;}
  });
}

var str = "Hi, howz are youd.";
console.log(letterChanges(str));

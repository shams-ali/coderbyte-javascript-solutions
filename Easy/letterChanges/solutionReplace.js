function letterChanges(input) {
  return input.replace(/[a-z]/gi, function(x){
    return x.toUpperCase() === "Z" ? "A" : String.fromCharCode(x.charCodeAt(x)+1);
  }).replace(/[a,e,i,o,u]/g, function(x){
    return x.toUpperCase();
  });
}

var str = "Hi, howz are youd.";
console.log(letterChanges(str));

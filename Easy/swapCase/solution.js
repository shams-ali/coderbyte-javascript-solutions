function swapCase(str){
  var arr = str.split("");
  return arr.map(function(x){
    return x.match(/[a-z]/g) ? x.toUpperCase() : x.toLowerCase();
  });
}
console.log(swapCase("Hello World"));

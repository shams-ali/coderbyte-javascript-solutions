function numberAddition(str){
  return str.replace(/[^0-9]/g, " ").split(" ").reduce(function(a,b){
    return +a + +b;
  });
}
console.log(numberAddition("88Hello 3World!"));

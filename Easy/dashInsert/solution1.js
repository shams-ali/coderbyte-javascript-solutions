function dashInsert(str){
  var array = str.split("")
  var isOdd = function(x){
    return x%2 === 1 ? true : false;
  };
  for(var i = 0;i<array.length;i++){
    if(isOdd(array[i]) && isOdd(array[i+1])){
      array[i] = array[i].replace(array[i], array[i]+"-")
      }
  }return array.join("")
}
console.log(dashInsert("53331"));

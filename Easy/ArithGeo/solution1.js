function ArithGeo(array){
  if(array.reduce(function(acc, curr){
    return curr/acc;
  })/(array.length - 1) === array[1]/array[0]){return "geometric";}else{

    return array.reduce(function(acc,curr){
      return curr-acc;
    });
  }
}
console.log(ArithGeo([2,4,6,8]));

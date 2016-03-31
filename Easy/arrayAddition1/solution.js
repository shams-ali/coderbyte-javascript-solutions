function arrayAddition1(arr){
  var target = arr.sort(function(x,y){return x-y;}).pop();
  arr = arr.sort(function(x,y){return x-y;});
  var length = arr.length;
  var bool = false;
  for(var i = 0; i < length-1;i++){
    bool = (arr.reduce(function(prev,curr){
      return prev + curr;
    })===target);
    var x = arr.shift();
    if(bool === true){break;}
  }
  return bool;
}

console.log(arrayAddition1([4, 6, 23, 10, 1, 3]));

function SuperIncreasing(arr){
var count = 1;
var bool = true;
if(bool === false){return false;}
  while(count < arr.length && bool === true){
    var slicedArr = arr.slice(0,count);
    var target = slicedArr.reduce(function(prev,curr){return prev+curr;});
    bool = (target < arr[count]);
    count++;
  }return bool;
}
console.log(SuperIncreasing([1, 2, 3, 13, 25]));

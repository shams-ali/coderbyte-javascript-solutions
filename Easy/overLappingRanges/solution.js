function OverlappingRanges(arr){
  function range(x,y){
    var newArray = [];
    for(var i = x; i<=y;i++){
      newArray.push(i);
     }return newArray;
  }
  var target = arr.pop();
  var range1 = range(arr[0], arr[1]);
  var range2 = range(arr[2], arr[3]);
  var totalRange = range(Math.min.apply(Math,arr),Math.max.apply(Math,arr));
  var concatRange = range2.concat(range1);
  return concatRange.length - totalRange.length === target;

}
console.log(OverlappingRanges([4, 10, 2, 6, 3]));

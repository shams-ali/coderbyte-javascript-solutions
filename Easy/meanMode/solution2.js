function meanMode(array){
//find average
var avg = array.reduce(function(prev,curr){
  return prev + curr;
},0)/array.length;

  //find mode
    var obj ={};
    var count = 0;
    for(var i = 0; i < array.length; i++){
        var thisNum = array[i];
        if(!obj[thisNum]){obj[thisNum] = 0;}
        obj[thisNum] += 1;
    }
    var result = {number: undefined, count: 0};
    for(var prop in obj){
      if(obj[prop] > result.count){
        result.count = obj[prop];
        result.number = prop;
      }
    } var mode = +result.number;

    return mode === avg ? 1 : 0;
}
console.log(meanMode([5,3,3,3,1]));

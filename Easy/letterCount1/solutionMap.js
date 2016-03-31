function letterCount1(str){
  var array = str.toLowerCase().split(" ");
  var newArray = array.map(function(count){
    try{return count.split("").sort().join("").match(/(.)\1/gi).length;}
    catch(e){return -1;}
  }); return array[newArray.indexOf(Math.max.apply(Math, newArray))];

}

console.log(letterCount1("Today, is the greatest day ever!"));

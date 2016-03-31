function divisionStringified(num1,num2){
  var res = Math.round(num1/num2).toString().split("");
  count = 3;
  comma = 1;
  while(res.length > count){
    count++;
    if(count%4 === 0){
      res.splice(comma,0,",");
      comma+=4;
    }
  }return res.join("");
}
console.log(divisionStringified(10000000000,3));

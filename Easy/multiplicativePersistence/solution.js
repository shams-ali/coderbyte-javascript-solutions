function multiplicativePersistence(num){
  num = num.toString();
  count = 0;
  if(num.length === 1){return count;}
  while (num.length > 1){
    count++;
    num = num.split("").reduce(function(prev,curr){
      return +prev * +curr;
    }).toString();
  }return count;
}

console.log(multiplicativePersistence(39));

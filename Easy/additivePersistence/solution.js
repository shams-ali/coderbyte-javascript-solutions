function additivePersistence(num){
  num = num.toString();
  count = 0;
  if(num.length === 1){return count;}
  while(num.length > 1){
    num = num.split("").reduce(function(prev,curr){
      return +prev + +curr;
    }).toString();
    count++;
  }return count;


}

console.log(additivePersistence(18));

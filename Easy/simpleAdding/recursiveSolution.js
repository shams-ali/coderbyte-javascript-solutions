var simpleAdding = function(num){
  if(num===1){
    return 1;
  }
  return num + simpleAdding(num-1);
};

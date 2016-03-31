function firstFactorial(input){
  if(input ===  0){
    return 1;
  }
  return firstFactorial(input-1)*input;
}

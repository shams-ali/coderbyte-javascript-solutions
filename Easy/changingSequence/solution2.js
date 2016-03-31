function changingSequence(arr){
  for(var i = 0; i<arr.length-1; i++){
    if(arr[0] < arr[1]){
      if(arr[i] > arr[i+1]){
        return arr.indexOf(arr[i]);
      }
    }else if(arr[0] > arr[1]){
      if(arr[i] < arr[i+1]){
        return arr.indexOf(arr[i]);
      }
    }
  }
  return -1;
}

console.log(prac([1,2,3,1]));

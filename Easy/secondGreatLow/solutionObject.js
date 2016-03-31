function secondGreatLow(arr) {
  if(arr.length == 2){
    return arr[0] + " " + arr[1];
  }
    var secgreatest = 0;
    var seclowest = 0;
    arr.sort(function(a,b){return a-b;});
    for(var i=1;i<arr.length;i++){
      if(arr[i] !== arr[i-1]){
        seclowest = arr[i];
        break;
      }
    }
    for(var j=arr.length-2;j>=0;j--){
      if(arr[j] !== arr[j+1]){
        secgreatest = arr[j];
        break;
      }
    }
    return seclowest + " " + secgreatest;
}

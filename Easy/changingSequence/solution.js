function changingSequence(arr){
  var maxIndex = arr.indexOf(Math.max.apply(Math,arr));
  var minIndex = arr.indexOf(Math.min.apply(Math,arr));
  if(arr[0]<arr[1]){return arr[0]===minIndex ? -1 : maxIndex;}
  if(arr[0]>arr[1]){return arr[0]===maxIndex ? -1 : minIndex;}
}

console.log(changingSequence([3,4,3]));

function hammingDistance(array){
    var array1 = array[0].split("");
    var array2 = array[1].split("");
    var count = 0;
    for(var i = 0;i<array1.length;i++){
      if(array1[i] != array2[i]){
        count++;
      }
    }return count;
}

console.log(hammingDistance(["coder", "codec"]));

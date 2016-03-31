function offLineMin(strArr){
  minArray = [];
  count = 0;
  while(strArr.join("").match(/E/) !== null){
    minArray.push(Math.min.apply(Math, (strArr.slice(0,strArr.indexOf("E")))));
    strArr.splice(strArr.indexOf(minArray[count].toString()),1);
    strArr.splice(strArr.indexOf("E"),1);
    count++;
  }return minArray;
}
console.log(offLineMin(["5","4","6","E","1","7","E","E","3","2"]));

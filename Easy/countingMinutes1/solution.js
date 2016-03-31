function countingMinutes(str){
      var startHour = +str.slice(0,str.indexOf(":"));
      var startMin = +str.slice(str.indexOf(":")+1, str.indexOf(":")+3);
      var endHour = +str.slice(str.indexOf("-")+1,str.indexOf("-")+3);
      var endMin = +str.slice(-4, -2);
  if(str.slice(str.indexOf(":")+3,str.indexOf("-")-1) === "p"){
    if(startHour != 12){startHour += 12;}
  }
  if(str.charAt(str.length-2) === "p"){
    if(endHour != 12){endHour += 12;}
  }
  var startMins = startHour * 60 + startMin;
  var endMins = endHour * 60 + endMin;
  return endMins - startMins >= 0 ? endMins - startMins : 1440 - (startMins - endMins)
}
console.log(countingMinutes("9:00pm-09:01am"));

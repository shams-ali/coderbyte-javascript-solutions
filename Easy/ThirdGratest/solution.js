var thirdGreatest = function(array){
  return array.sort(function (a, b) { return b.length - a.length; })[2];
};

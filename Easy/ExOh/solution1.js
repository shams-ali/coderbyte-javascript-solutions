function ExOh(str){
  return str.match(/x/gi).length === str.match(/o/gi).length;
}
console.log(ExOh("XxoO"));

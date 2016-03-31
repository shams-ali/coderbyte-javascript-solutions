function ABcheck(str){

  return str.match(/a...b/gi) || str.match(/b...a/gi) ? true : false
}
console.log(ABcheck("lbbe aorrowed"));

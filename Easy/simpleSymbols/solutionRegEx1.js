function simpleSymbols(str){
  return str.match(/\+[a-z]\+/gi).length === str.match(/[a-z]/gi).length;
}


console.log(simpleSymbols("+=+b=+a+="));

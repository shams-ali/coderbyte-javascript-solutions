function letterCapitalize(input){
  return input.replace(/\b[a-z]/gi, function(x){
    return x.toUpperCase();
  });
}


console.log(letterCapitalize("hi how are you"));

function letterCapitalize(input){
  return input.split(" ").map(function(x){
    return x.charAt(0).toUpperCase() + x.slice(1);
  }).join(" ");
}


console.log(letterCapitalize("hi how are you"));

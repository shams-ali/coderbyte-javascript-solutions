function letterChanges(input) {
  var array = input.split("").map(function(x) {
    if (x.match(/[a-y]/gi)) {
      return String.fromCharCode(x.charCodeAt(x) + 1);
    } else if (x.match(/[z]/gi)) {
      return "A";
    } else {
      return x;
    }
  }).map(function(y) {
    if (y.match(/[a,e,i,o,u]/gi)) {
      return y.toUpperCase();
    } else {
      return y;
    }
  });
  return array.join("");
}

var str = "Hi, howz are you.";
console.log(letterChanges(str));

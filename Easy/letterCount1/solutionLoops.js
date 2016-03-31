function letterCount1(str){
  var words =  str.split(" ");
  var table = {};
  for(var i = 0;i<words.length;i++){
    var thisword = words[i];
    table[thisword] = {};
    table[thisword].highest = 0;
    for(var j = 0; j<words[i].length;j++){
      var thisLetter = thisword[j];
      table[thisword][thisLetter] === undefined ?
      table[thisword][thisLetter] = 1 : table[thisword][thisLetter] += 1;
      if (table[thisword][thisLetter] > table[thisword].highest){
      table[thisword].highest = table[thisword][thisLetter];
        }
      }
    }
    var answer = {word: null, count: 1};
    for(var prop in table){
       if(table[prop].highest > answer.count){
        answer.count = table[prop].highest;
        answer.word = prop;
       }
    }return answer.count === 1 ? -1 : answer.word;
}

console.log(letterCount1("Today, is the greatest day ever!"));

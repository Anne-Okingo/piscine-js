 function words (str){
    return str.split(' ')
 };

//  console.log(words('hey you how are you'));
 function sentence(arr){
    return arr.join(' ')
 };

//  console.log(sentence([ 'hey', 'you', 'how', 'are', 'you' ]));

 function yell(str){
    return str.toUpperCase()
 };

//  console.log(yell('hello world'))

 function capitalize(str){
   return str
   .split(' ')
    .map(words => words.charAt(0).toUpperCase()+ words.slice(1).toLowerCase())
    .join(' ')
 };

//  console.log(capitalize('hello world'))
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

 function whisper(str){
    return `*${str.toLowerCase()}*`
 };

//  console.log(wisper('HELLO WORLD'))

 function capitalize(str){
   return str.charAt(0).toUpperCase()+ str.slice(1).toLowerCase()
 };

 console.log(capitalize('hello world'))
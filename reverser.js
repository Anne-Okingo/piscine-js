const reverse = (input) =>{
   let  reversed = Array.isArray(input)? []:''
   for (let i = input.length -1;i >= 0;i--){
    if (Array.isArray(input)){
        reversed.push(input[i])
    }else{
        reversed += input[i]
    }
   }
   return reversed
}

// console.log(reverse(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
// console.log(reverse('abcdef')); // Output: 'fedcba'
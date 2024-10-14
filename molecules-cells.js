const RNA = (string) =>{
    let dna = ''
    if (IsDNA){
        for(let i = 0; i < string.length; i++){
            if (string[i] === 'G'){
                dna += 'C'
            }
            if (string[i] === 'C'){
                dna += 'G'
            }
            if (string[i] === 'T'){
                dna += 'A'
            }
            if (string[i] === 'A'){
                dna += 'U'
            }
        }
    }else{
        throw new Error('Invalid DNA string: ' + string);
    }
}

const DNA = (string) =>{
    let rna = ''
    if (IsRNA){
        for(let i = 0; i < string.length; i++){
            if (string[i] === 'G'){
                rna +='C'
            }
            if (string[i] === 'C'){
                rna += 'G'
            }
            if (string[i] === 'T'){
                rna += 'A'
            }
            if (string[i] === 'A'){
                rna += 'U'
            }
        }
    }else{
        throw new Error('Invalid RNA string: ' + string);
    }
}

const IsRNA = (string) =>{
    const regex = /^[CGAU]*$/

    if (regex.test(string)){
        for(let i = 0; i < string.length; i++ ){
            const char = string[i]
            if (char !== ' ' || char === char.toUpperCase()){
                return true
            }
        }
    }
    return false
}


const IsDNA = (string) =>{
    const regex = /^[CGAU]*$/

    if (regex.test(string)){
        for(let i = 0; i < string.length; i++ ){
            const char = string[i]
            if (char !== ' ' || char === char.toUpperCase()){
                return true
            }
        }
    }
    return false
}

console.log(RNA("CGAX")); 


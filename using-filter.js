function filterShortStateName(array){
    const result = array.filter((str) => str.length > 7)
    return result
}

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// console.log(filterShortStateName(words))


const filterStartVowel = (array) =>{
    const result = array.filter(str => /^[aeiou]/i.test(str))
    return result
}


function vowelCount(string){
    let count = 0
    const lowerStr = string.toLowerCase()
    for (let i = 0; i < lowerStr.length; i++){
        if (lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u'){
            count++
        }
    }
    return count >= 5
}

function filter5Vowels(array){
    const result = array.filter(string=> vowelCount(string))
    return result
}


function filter1DistinctVowel(array) {
    return array.filter(str => {
        const lowerStr = str.toLowerCase();
        const vowels = new Set();
        for (let char of lowerStr) {
            if ('aeiou'.includes(char)) {
                vowels.add(char);
            }
        }
        return vowels.size === 1;
    });
}

function multiFilter(array) {
    return array.filter(obj => {
        const capitalCondition = obj.capital.length >= 8;
        const nameCondition = !/^[aeiou]/i.test(obj.name);
        const tagCondition = /[aeiou]/i.test(obj.tag);
        const regionCondition = obj.region !== 'South';

        return capitalCondition && nameCondition && tagCondition && regionCondition;
    });
}
// const states = ['Alabama', 'Ohio', 'California', 'aeiou', 'Utah', 'Nevada'];

// console.log(filter1DistinctVowel(states))

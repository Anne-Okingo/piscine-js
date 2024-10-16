// let user = {
//     name : "Alice Anne",
//     age : 30,
//     "multi words": true,
// }

// user.isAdmin = true
// // user."multi words" = true,
// // delete user.age
// // console.log(user)
// // console.log(user["multi words"])
// // delete(user["multi words"])
// // console.log(user)

// // let key = "name"
// // console.log(user[key])
// // console.log(user.words)
// let key ="age"
// console.log(user[key])

// let fruit = "apple"

// let bag ={
//     [fruit + 'computers']: 5,
// }

// console.log(bag["apple + computer"])

// let obj = {
//     name: "Alice",
//     age: 30
// }

// // "key" in obj

// console.log("nam" in  obj)


// let object = {
//     name: "Alice",
//     age: 30,
//     isAdmin:true
// }

// for(key in object){
//     console.log(key)
//     console.log(object[key])
// }


// let obj = {}
// obj.name ="john"
// obj.surname = "Smith"
// obj.name = "Pete"
// delete obj.name

// console.log(obj)

// function isEmpty(obj){
//     let count = 0
//     for ( let key in obj){
//         count++
//     }
//     if (count < 1){
//         return true
//     }
//     return false
// }

// console.log(isEmpty(obj))


// function sum (object){
//     let sum = 0
//     for (let key in object){
//         sum += object[key]
//     }
//     return sum
//     // sum === 0
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// console.log(sum(salaries))


// function multiplyNumeric(obj){
//     for (let key in obj){
//         if(typeof obj[key] == 'number'){
            
//             obj[key] *= 2
//         }
//     }
//     return obj
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   console.log(multiplyNumeric(menu))


function invert(object){
    let inverted  = {}
    for(let key in object){
        if(object.hasOwnProperty(key)){
            inverted[object[key]] = key
        }
    }
    return inverted
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

console.log(invert(salaries))
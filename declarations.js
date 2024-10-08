const escapeStr = "`\\ /\"'"

const arr = [4,'2']

Object.freeze(arr)

const obj = {
str : 'Alice',
num : 254,
bool : true,
undef: undefined,
}

Object.freeze(obj)

const nested = {
    arr: [
        4,undefined,'2'
    ],
    obj :{
        str: 'Alice',
        num: 254,
        bool: true,
    }
}

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)

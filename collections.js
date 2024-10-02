function fineTypeOf(value){
    if(value === null)return 'null';
    if(Array.isArray(value)) return 'Array';
    if(value instanceof Map)return 'Map';
    if(value instanceof Set) return 'Set';
    if(typeof value === 'object') return'Object';

    if(typeof value === 'string') return 'String';
    if(typeof value === 'number') return 'Number';
    if(typeof value === 'boolean') return 'Boolean';
    if(typeof value === 'function') return 'Function';
    if(typeof value === 'undefined') return 'undefined';
}
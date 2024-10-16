function flags(obj) {
    var result = { alias: { h: 'help' } };
    if (obj.length === 0) return result;
    let help = obj.help;
    delete obj.help;
    for (let key in obj) {
        result.alias[key[0]] = key;
    }
    if (help) {
        result.description = help.map((key) => {
            let descript = obj[key];
            return `-${key[0]}, --${key}: ${descript}`;
        });
    } else {
        result.description= Object.keys(obj).map((key) => {
            let descript = obj[key];
            return `-${key[0]}, --${key}: ${descript}`;
        });
    }
    result.description.length === 0
        ? (result.description = '')
        : result.description.length === 1
            ? (result.description = result.description[0])
            : (result.description = result.description.join('\n'));
    return result;
}

console.log(flags({}))
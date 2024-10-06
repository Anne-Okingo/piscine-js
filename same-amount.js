function sameAmount(str, regex1, regex2) {
    const matches1 = (str.match(new RegExp(regex1.source, 'g')) || []).length
    const matches2 = (str.match(new RegExp(regex2.source, 'g')) || []).length
    return matches1 === matches2
}
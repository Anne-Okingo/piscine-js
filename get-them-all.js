export const getArchitects = () => {
    const architects = Array.from(document.querySelectorAll('a.architect'))
    const nonArchitects = Array.from(document.querySelectorAll('a:not(.architect)'))
    
    return [architects, nonArchitects]
}

export const getClassical = () => {
    const classicalArchitects = Array.from(document.querySelectorAll('a.architect.classical'))
    const nonClassicalArchitects = Array.from(document.querySelectorAll('a.architect:not(.classical)'))
    
    return [classicalArchitects, nonClassicalArchitects]
}

export const getActive = () => {
    const activeClassical = Array.from(document.querySelectorAll('a.architect.classical.active'))
    const nonActiveClassical = Array.from(document.querySelectorAll('a.architect.classical:not(.active)'))
    
    return [activeClassical, nonActiveClassical]
}

export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const remainingActiveClassical = Array.from(document.querySelectorAll('a.architect.classical.active:not(#BonannoPisano)'))
    
    return [bonannoPisano, remainingActiveClassical]
}

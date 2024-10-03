const cutFirst = (string) =>{
    let newstr = ''
    let start = 2
    let end = string.length

        for(let i = start; i < end; i++){
            newstr = newstr + string[i]
        }
        return newstr
    }

    function cutLast (string){
        let newStr = ''
        let end = string.length - 2
        let start = 0

        for (let i= start; i < end; i++){
            newStr = newStr + string[i]
        }
        return newStr
    }

    
    function cutFirstLast (string){
        let  newsTr = ''
        let start = 2
        let end = string.length -2
        
        for (let i = start; i < end; i++){
            newsTr = newsTr + string[i]
        }
        return newsTr
    }

    const keepFirst = (string) =>{
        let nEwstr = ''
        let start = 0
        let end = 2

        for (let i = start; i < end; i++){
            nEwstr = nEwstr + string[i]
        }
        return nEwstr
    }

    const keepLast = (string) =>{
        let nEwstr = ''
        let start = string.length -2
        let end = string.length

        for (let i = start; i < end; i++){
            nEwstr = nEwstr + string[i]
        }
        return nEwstr
    }

    const keepFirstLast = (string) =>{
        let nEwstr = ''
        let start = keepFirst(string)
        let end = keepLast(string)
        nEwstr = start + end
        
        return nEwstr
    }

    
    // console.log(keepFirstLast('banianas'))


function isSumPossible(list, k){
    for(let elem of list){
        if(list.includes(k-elem)){
            console.log(elem + " + " + (k-elem) + ' = ' + k)
            return true
        }
    }
    return false
}

module.exports = isSumPossible;

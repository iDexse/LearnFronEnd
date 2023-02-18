Array.prototype.reduce2 = function(callback, initialValue){
    let i = 0
    if(arguments.length < 2){
        i = 1
        initialValue = this[0]
    }
    for (; i < this.length; i++){
        initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
}

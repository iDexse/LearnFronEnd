var courses = [
    'javaScript',
    'PHP',
    'Python',
    'javaScript'
]
var courses1 = [
    {
        id: 1,
        name: 'javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'html, css',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 400
    }
]

Array.prototype.map2 = function(callback){
    var outPut =[]
    arrayLenght = this.length
    for (var i = 0; i < arrayLenght; i++){
        var result = callback(this[i], i)
        outPut.push(result)
    }
    return ouput
}

// courses.map2(function(course, index){
//     return course
// })

Array.prototype.every2 = function(cb){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result  = cb(this[i], i)
            if(!result)
            return false
        }
    }
    return true
}

Array.prototype.some2 = function(cb){
    for( var i in this){
        if(this.hasOwnProperty(i)){
            var result  = cb(this[i], i)
            if(result){
                return true
            }
        }
    }
    return false
}

Array.prototype.forEach2 = function(cb){
    for (var i in this){
        if (this.hasOwnProperty(index)){//kiểm tra xem key có nằm trong thuộc tính gần nhất không
            cb(this[i], i, this)
        }   
    }
}

// courses.forEach2(function(course, index){
//     console.log( index, course)
// })

Array.prototype.find2 = function(cb){
    var arrayLenght = this.length
    for( var i = 0; i<arrayLenght; i++){
        var result = cb(this[i], i)
        if(result){
            return this[i]
        }
    }
    return undefined
}
// var findI = courses.find2(function(course, index){
//     return course === "javaScript"
// })

// console.log(findI)

Array.prototype.filter2 = function(cb){
    var outPut = []
    for (var i in this){
        if (this.hasOwnProperty(i)){
            var result = cb(this[i], i)
        if (result){
            var result2 = this[i]
            outPut.push(result2)
        }
        }
    }
    return outPut
}


var courseName2 = courses1.filter2(function (course, index){
    return course.name === 'ruby';
}); 
console.log(courseName2)
var courseAPI = 'http://localhost:3000/courses'

fetch(courseAPI)
    .then(function(respone){
        return respone.json()
    })
    .then(function(courses){
        console.log(courses)
    })
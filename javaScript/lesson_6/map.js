var courses = [
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

var newCourses = courses.map(function(course, index, originArray){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,// là trả về array gốc ban đầu
    }
});
// function trong map return lại cái gì thì sẽ return lại cái đó tại vị trí phần tử của mảng.
var newCourses2 = courses.map(function(course, index, originArray){
    return course.name // trả về toàn bộ tên vào array mới. 
});
//=============================
var newCourses2 = courses.map(function(course, index, originArray){
    return `<h2>${course.name}</h2>`
});
console.log(newCourses2.join('')) // để trả về dạng string để xài đc trong html


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

courses.forEach(function (course, index){
    console.log(index, course)
}); 
// duyệt qua từng phần tử của mảng
var isFree = courses.every(function (course, index){
    return course.coin === 0;
}); 
console.log(isFree)
// duyệt qua từng phần tử, khi tất cả đúng trả về true, khi một phần tử sai là ngừng và trả về false
var isFree1 = courses.some(function (course, index){
    return course.coin === 0;
}); 
console.log(isFree1)
// giống every nhưng chỉ cần MỘT phần tử đúng thì trả về true
var courseName = courses.find(function (course, index){
    return course.name === 'Ruby';
}); 
console.log(courseName)
// kiểm tra tìm kiếm đến phần tử nào đúng thì trả về đúng MỘT phần tử đó, không thoả mãn thì trả về undefind
var courseName2 = courses.filter(function (course, index){
    return course.name === 'Ruby';
}); 
console.log(courseName2)
// giống find, nhưng phần tử nào đúng là trả về hết tất cả phần tử đúng đó.
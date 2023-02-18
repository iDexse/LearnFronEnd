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

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
// lấy ra một mảng 'phẳng'
var flatArray = depthArray.reduce(function(flatOutPut, depthItem){
    return flatOutPut.concat(depthItem)
}, [])

var topics = [
    {
        topic: "Font-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newCourses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses)
}, [])

var html = newCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
})

console.log(htmls.join(''))
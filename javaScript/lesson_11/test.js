var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var newCourses = courses.map(function(course, i){
        return `<li>${courses[i]}</li>`
    })
    var li = newCourses.join('')
    var ul = document.querySelector('ul')

    return ul.innerHTML = li
}

render(courses)


let coursesApi = 'http://localhost:3000/courses/' // đoạn này thêm / ở cuối URL rồi thì không phải + '/' ở phía dưới nữa nhé :)
let cancelUpdateBtn = document.querySelector('#cancel')
let updateBtn = document.querySelector('#update')

function start() {
    cancelUpdateBtn.style.display = 'none'
    updateBtn.style.display = 'none'
    getCourses(renderCourses)
    handleCreateForm()
}

start()

// start API methods-------------------------------------------------------
// GET method: start ~ 9'10"
function getCourses(callback) {
    fetch(coursesApi)
        .then(response => response.json())
        .then(callback)
}

// POST method: 14'10" ~ 22'44"
function createCourse(data, callback) {
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    fetch(coursesApi, options)
        .then(response => response.json())
        .then(callback)
}

// DELETE method: 22'40" ~ end
function handleDelete(id) {
    let options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }

    fetch(coursesApi + id, options)
        .then(response => response.json())
        .then( () => document.querySelector(`.course-item-${id}`).remove() )
}

// PUT method: phần này của 1 bạn học viên F8, không phải của mình
function handleUpdate(course) {
    let {id, name, desc} = course.dataset
    let nameCourse = document.querySelector('input[name="name"]')
    let descCourse = document.querySelector('input[name="description"]')

    nameCourse.value = name
    descCourse.value = desc

    showBtnUpdate(true)

    cancelUpdateBtn.onclick = () => {
        showBtnUpdate(!true)
        nameCourse.value = ''
        descCourse.value = ''
    }

    updateBtn.onclick = () => {
        let formData = {
            name: nameCourse.value,
            description: descCourse.value
        }

        let options = {
            method: "PUT",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(formData)
        }

        fetch(coursesApi + id, options)
            .then(response => response.json())
            .then(() => {
                nameCourse.value = ''
                descCourse.value = ''
                showBtnUpdate(!true)
                getCourses(renderCourses)
            })
    }
}
// end API methods-------------------------------------------------------

// functions
function renderCourses(courses) {
    let listCourses = document.querySelector('#list-courses');
    let htmls = courses.map(course => {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>

                <button onclick="handleDelete(${course.id})">
                    delete
                </button>

                <button data-id="${course.id}" data-name="${course.name}" data-desc="${course.description}" onclick="handleUpdate(this)">
                    edit
                </button>
            </li>
        `
    })
    listCourses.innerHTML = htmls.join('')
}

function handleCreateForm() {
    let createBtn = document.querySelector('#create')
    createBtn.onclick = () => {
        let name = document.querySelector('input[name="name"]').value
        let description = document.querySelector('input[name="description"]').value
        const formData = { name, description }
        createCourse(formData, () => getCourses(renderCourses))
    }
}

function showBtnUpdate(isCheckBtn) {
    if(isCheckBtn) {
        document.querySelector('#create').style.display = 'none'
        cancelUpdateBtn.style.display = 'inline-block'
        updateBtn.style.display = 'inline-block'
    } else {
        document.querySelector('#create').style.display = 'inline-block'
        cancelUpdateBtn.style.display = 'none'
        updateBtn.style.display = 'none'
    }
}

var boxElement = document.querySelector('.box')
// cách 1
boxElement.style.width = '100px'
boxElement.style.height = '200px'
boxElement.style.backgroundColor = 'red'    

// cách 2
Object.assign(boxElement.style, {
    width: '100px',
    height:'200px',
    backgroundColor: 'red'
})
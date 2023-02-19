
//classList trả về đối tượng DOMTokenList

// add thêm class vào element
// contains kiểm tra 1 class có nằm trong element hay không
// remove xoá class ở element
// toggle có class thì xoá, không có thì xoá class ở element
// replace thay thế class,.replace('box', 'red') đổi class box thành red
var boxElement = document.querySelector('.box')


boxElement.classList.add('red', 'blue')

console.log(boxElement.classList.contains('red'))

setInterval(()=>{

}, 1000) // là sau mỗi 1 giây sẽ thực hiện code

setTimeout(() => {
    boxElement.classList.remove('red')
}, 3000);// là 3 giây




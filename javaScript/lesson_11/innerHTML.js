// innerHTML, outerHTML

var boxElement = document.querySelector('.box')

boxElement.innerHTML = '<h1 title= "heading">xin chào</h1>' // thêm thẻ tag element và textNode và thuộc tính

boxElement.outerHTML = '<span>Text</span>' // thay đổi element đang gọi

console.log(boxElement.innerHTML) //  lấy nguyên tất cả bên trong element
console.log(boxElement.outerHTML) // lấy luôn cả element đang gọi nó




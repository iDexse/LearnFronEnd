var headingElement = document.querySelector('h1')

console.log(headingElement.innerText) // lấy nội dung text trong element
console.log(headingElement.textContent)

headingElement.innerText = 'New heading'// thay đổi nội dung text, có thể dùng .textContent

// textContent là lấy nguyên bản textNode(khoảng cách, xuống hàng,...) trong element ở HTML
// innerText là lấy ra giống như những gì nhìn thấy trong web thực sự
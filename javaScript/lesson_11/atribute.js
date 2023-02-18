var headingElement = document.querySelector('h1')


headingElement.title = 'heading' // thêm thuộc tính title vào element
headingElement.className = 'heading' // thêm thuộc tính class vào element

headingElement.setAttribute('href',' heading') // có thể set được thuộc tính không hợp lệ vào element

var headingElement3 = document.querySelector('h3')

headingElement3.getAttribute('class')// lấy value của thuộc tính
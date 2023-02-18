// element: ID, class, tag, CSS seletor, HTML collection

var headingNode = document.getElementById("heading")

var headingNodes = document.getElementsByClassName("heading1")// lấy element qua tên class vào một HTML collection

var headingNodeTags = document.getElementsByTagName('h1')// lấy element qua tên tag vào một HTML collection

var headingNodeCSS = document.querySelector('.box .heading-2:first-child')
var headingNodeCSS2 = document.querySelector('.box .heading-2:ntn-child(2)')// lấy phần tử thứ 2 cùng tên class

var headingNodeCSS3 = document.querySelectorAll('.box .heading-2')// lấy tất cả element cùng tên class heading-2 vào một nodeList

console.log(headingNodeCSS3[0])// lấy element vị trí đầu tiên

console.log(document.forms[0]) //  lấy element form
document.forms['form-1']// lấy element form theo id
document.forms.testFrom // lấy element form theo id tên biến


document.anchors // lấy element a có thuộc tính name vào html collection

var boxNode = document.querySelector('.box-1')

//1. sử dụng tới 'boxNode'

//2. sử dụng tới các li element là con của box-1

console.log(boxNode.querySelectorAll('li'))

document.write('hello') // in ra ngay phía tại <script>
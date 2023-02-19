//1. preventDefault là loại bỏ hành vi mặc định của trình duyệt
//2. stopPropagation là loại bỏ sự kiện nổi bột

var  aElement = document.querySelectorAll('a')// document.links(lấy hết thẻ a có link)


for (var i = 0; i< aElement.length; i++){
    aElement[i].onclick = function(e){
        if(!e.target.href.startsWith('https://animehay.pro/')){
            e.preventDefault(); // ngăn không cho thẻ a nào không có href https://animehay.pro/ chạy
        }
    }
}

var ulElement = document.querySelector('ul')
ulElement.onmousedown = function(e){
    e.preventDefault()
}
ulElement.onclick = function(e){
    console.log(e.target)
}


document.querySelector('div').onclick =function(){
    console.log('DIV')
}

document.querySelector('button').onclick = function(e){
    e.stopPropagation(); // ngăn chặn nổi bột của element
    console.log('Click me!') 
}
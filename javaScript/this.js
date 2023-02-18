// this sẽ tham chiếu tới đối tượng gọi phương thức(đối tượng trước dấu .)
// this trong hàm của một hàm sẽ là global, dùng arrow function thì sẽ dùng this ở this gần nhất chứa nó

const iphone7 = {
    //thuộc tính - property là key trong object
    name: 'iPhone 7',
    color: 'Pink',
    weight: 300,

    // phương thức - method
    takePhoto(){
        console.log(this)// this trong này sẽ trả về đối tượng nó thuộc về
    },
    objChild: {
        methodChild(){
            console.log(this) // this trả về objChild
        }
    }
}

console.log(iphone7.objChild.methodChild()) // this trong một phương thức . thì sẽ trả về đối tượng đang . phương thức đó

function car(name, color, weight){
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function(){
        console.log('Running...', this)
    }
}

const merces = new car('mercedes 4150', 'Yellow', 1000)

console.log(merces)
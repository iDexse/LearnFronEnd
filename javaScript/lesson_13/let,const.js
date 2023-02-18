// var / let, const: scope, hosting
// const / var, let: Assignment(gắn)

// phạm vi scope của var là trong một block {} thì var có thể truy cập ở bên ngoài block,
// const và let thì không thể truy cập bên ngoài block

// var đc hỗ trọ hosting là var khi được thông dịch thì luôn đc dịch lên trên đầu, let và const thì không thể

// const là không thể gắn lại lần thứ 2 cùng biến, nhưng gán lại thuộc tính trong biến thì đc
// ví dụ:
const a ={
    name: "python"
}

a.name = "php"
console.log(a.name)// gắn lại thuộc tính name đc

const logger = (log) => {
    console.log(log)
}

const sum = (a, b) => a + b // sau => là return 
const object = (a, b) => ({a:a, b:b});// return object

const mess = mess => console.log(mess);

const courses = {
    name: 'JavaScript basic',
    getName: function(){ // dùng => thì không thể sử dụng this để context
        return this.name; // context
    }
}

const Course = function(name, price){ // ở contructor dùng => {} thì sẽ không đc
    this.name = name;
    this.price = price
}

const jsCourse = new Course('JavaScript', 1000)

console.log(jsCourse)

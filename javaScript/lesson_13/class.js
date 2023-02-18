function Course(name, price){
    this.name = name
    this.price = price

    this.getName = function(){
        return this.name
    }

    const isSuccess = true
}
const phpCourse = new Course("PHP", 1000);

// class

class Course2 {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    getName(){
        return this.name
    }

    getPrice(){
        return this.price
    }

    start(){
        const isSuccess = false;
    }
}

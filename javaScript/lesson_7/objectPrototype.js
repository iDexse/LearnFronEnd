function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${firstName} ${lastName}`;
    }
}

User.prototype.className = 'F8'
User.prototype.getClassName = function(){
    return this.className
}

var user = new User('Đức', 'Nghĩa', 'Avatar 1')
var user2 = new User('Lâm', 'Uyên', 'Avatar 2')

console.log(user.className)
console.log(user2.getClassName())
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${firstName} ${lastName}`;
    }
}

var author = new User('Đức', 'Nghĩa', 'avatar');
var user = new User('Vu', 'Toan', 'Avatar');

author.title = 'chủ admin';
user.comment = 'xin chào admin';

console.log(author.getName())
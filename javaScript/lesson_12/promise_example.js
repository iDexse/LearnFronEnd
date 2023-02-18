var users = [
    {
        id: 1,
        name: "Vu Nguyên"
    },
    {
        id: 2,
        name: "Đức Nghĩa"
    },
    {
        id: 3,
        name: "Son Đặng"
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh son chua ra video"
    },
    {
        id: 2,
        user_id: 3,
        content: "Vừa ra xong em ơi"
    }
]

//1. lấy comment
//2. từ commet lấy ra user_id
//3. từ user_id lấy ra user tương ứng

function getComment(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        }, 1000)
    })
}
function getUsersByIds(userIds){
    return new Promise((resolve, reject) => {
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function(){
            resolve(result);
        },1000)  
    })
}
getComment()
    .then(function(comments){
        var userids = comments.map(function(comment){
            return comment.user_id;
        });
        return getUsersByIds(userids)
            .then(function(users){
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then(function(data){
        var commentBlock= document.getElementById("comment-block")

        var html = ''
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user){
                return user.id === comment.user_id
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
        // console.log(data)
    })


const Task = require("../model/task");

exports.task = (req, res) => {
    Task.get_signup(function(result){
        console.log(result);
        res.render("task", { data: result });
    })
}

exports.post_task = (req, res) => {
    Task.post_signup(req.body, function(){
        res.send("회원가입 성공이다");
    })
}

exports.post_login = (req, res) => {
    Task.post_login(req.body, function(data){
        if(data.length > 0) res.send(data[0]);
        else res.send("0");
    })
}
exports.update = (req, res) => {
    Task.update(req.body, function(data){
        res.send("수정완료");
    })
}
exports.delete_inform = (req, res) => {
    Task.delete_inform(req.body.id, function(data){
        res.send("삭제완료");
    })
}











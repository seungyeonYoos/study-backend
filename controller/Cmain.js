const Test = require("../model/User");

exports.main = (req, res) => {
    res.render("main");
}

exports.login = (req, res) => {
    
    var info = Test.login(req.body);
    res.send(info);
}

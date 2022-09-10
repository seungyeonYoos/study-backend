exports.hello = function() {
    return "hello";
}

exports.login = function(u_data) {
    console.log(u_data);
    if( u_data.name == "dbtmddus" && u_data.password == "1234") {
        return {result : "로그인성공"};
    }else{
        return {result : "로그인실패"};
    }
    // return { id: "bbb", pw:"1234"};
}
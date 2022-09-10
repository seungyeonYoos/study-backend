var User =
`spreatics//12341234//코딩온
codee//4321//codee
soyeon//1234//김소연`

exports.login = function(u_data) {
    console.log(u_data);
    if( u_data.name == "spreatics" && u_data.password == "12341234") {
        return {result : "로그인성공"};
    }else{
        return {result : "로그인실패"};
    }
}
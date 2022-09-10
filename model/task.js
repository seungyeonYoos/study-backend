const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'myyepp0902!!',
    database: 'study'
});

exports.get_signup = (cb) => {
    var sql = 'SELECT * FROM task';
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("member : ", rows);

        cb(rows);
    })
}
exports.post_signup = (data, cb) => {
    var sql = `INSERT INTO task(id, name, password) values('${data.id}','${data.name}','${data.password}');`;
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("member : ", result);

        cb();
    })
}
exports.post_login = (data, cb) => {
    var sql = `SELECT * FROM task WHERE id='${data.id}' AND password = '${data.password}' limit 1`;

    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    })
}

exports.update = ( data,  cb ) => {
    var sql = `UPDATE task SET id='${data.id}', name='${data.name}', password='${data.password}';`;

    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    });
}
exports.delete_inform = ( id,  cb ) => {
    var sql = `DELETE FROM task WHERE id='${id}'` ;
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        cb( rows );
    });
}
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads"));
const port = 8000;
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, 
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/upload", upload.single('userfile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send(req.file.filename);
})


app.get("/", (req, res) => {
    res.render("yyy");
})

app.get("/bbbb", (req, res) => {
    res.render("bbbb");
})

app.get("/kkk", (req, res) => {
    res.render("kkk");
})

app.get("/get", (req, res) => {
    console.log(req.query);
    res.render("aaa", {
        name: req.query.name,
        gender: req.query.gender,
        birthYear: req.query.birthYear,
        birthMonth: req.query.birthMonth,
        birthDay: req.query.birthDay,
        fav: req.query.fav
    });
    //이 문자열을 보여주겟다는 뜻
})

app.post("/get/axios", (req, res) => {
    console.log(req.body);

    var data = {
        name: req.body.name,
        password: req.body.password,
    }
    // res.send("로그인실패"); //res. ~~ 서버의 응답
})

// app.post("/post",(req,res)=>{
//     console.log(req.body);
//     console.log(req.query);
//     res.render("aaa" , {
//         name : req.body.name,
//         gender : req.body.gender
//     });
//     //이 문자열을 보여주겟다는 뜻
// })

app.listen(port, () => {
    console.log("server open: ", port);
})
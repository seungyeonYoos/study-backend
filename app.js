    const express = require("express");
    const multer = require("multer");
    const app = express();
    app.set("view engine", "ejs");
    app.use("/static", express.static("static"));
    const port = 8000;
    const upload = multer({
        dest: "uploads/"
    });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.post("/upload",upload.single("userfile"),(req,res)=>{
        console.log(req.body);
        console.log(req.file);
        res.send("업로드성공");
    })


    app.get("/",(req,res)=>{
        res.render("ggg");
    })

    app.get("/bbbb",(req,res)=>{
        res.render("bbbb");
    })

    app.get("/ggg",(req,res)=>{
        res.render("ggg");
    })

    app.get("/get",(req,res)=>{
        console.log(req.query);
        res.render("aaa",{
            name : req.query.name,
            gender : req.query.gender,
            birthYear: req.query.birthYear,
            birthMonth: req.query.birthMonth,
            birthDay: req.query.birthDay,
            fav: req.query.fav
        });
        //이 문자열을 보여주겟다는 뜻
    })

    app.post("/get/axios",(req,res)=>{
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

    app.listen(port, ()=>{
        console.log("server open: ", port);
    })
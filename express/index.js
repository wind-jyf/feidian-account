const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

//创建了一个app对象
var app = express();
app.use(require('cors')())  //解决跨域的问题

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/users',(req,res)=>{    //获取users表中的内容
    fs.readFile('./db.json','utf-8',(err,data)=>{
        res.send(data);
    })
}),

app.post('/register',(req,res)=>{ //注册
    let users = req.body;
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            console.log("文件读取失败");
        }else{
            let list = JSON.parse(data).users;
            list.push(users);
            console.log(list);
            let json = JSON.stringify({users:list});
            fs.writeFile('./db.json',json,(err,data)=>{
                if(err){
                    console.log("写入失败");
                }else{
                    console.log(data);
                }
            })
        }
    })

   res.send("okkk")
})

app.listen(3000,()=>{
    console.log("服务器正在running");
})
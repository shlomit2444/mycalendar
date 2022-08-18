//נתקין אפליקציית אקספרס, נתקין את הספריות הבאות
//npm i nodemon morgan express bcrypt jsonwebtoken dotenv mongoose cors mongodb mysql
const express = require("express");
const app = express();
//הפונקציה מקבלת בקשה ותשובה - שני אובייקטים
//REQ- מייצג את הבקשה, הפנייה לשרת
//RES - מייצד את התשובה, תשובת השרת לבקשה
const cors = require("cors");//האם אני מאפשר גישה לקוד שלי מכתובות מסויימות
const Auths = require("./API/V1/middleware/Auths");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev")); 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const EventRouter = require("./API/V1/routes/event");
const UserRouter =  require('./API/V1/routes/user')

require("dotenv").config();


const uri = process.env.MONGO_CONN;
mongoose.connect(uri, {useNewUrlParser:true}).then(()=>{console.log("mongo db conntected")});

/*
app.all('*', (req, res)=>{
    //החזרת תשובה עם סטסאוס 200 , הכל תקין
    //ומחזירים ג'ייסון עם הודעה מתאימה
return res.status(200).json({Msg:"Got Your Request"});


});
*/

//זוהי פונקציה המטפלת בכל שיטות הבקשה
//GET POST PUT DELETE PATCH
//הפונקציה מקבלת את הנתיב ואת הקוד לביצוע
//app.get("/user",)
app.get("/event");
app.get("/event/:eid");
app.post("/event");
app.put("/event/:eid");
app.delete("/event/:eid");
app.post("/user");

/*
app.get("/user/");
app.get("/user/:uid");
app.post("/user");
app.put("/user/:uid");
app.delete("/user/:uid");
*/
//app.post("user/Login");
//ניתובים
//נתונים
//קונטרולרים

//הגדרת ניתוב

app.use("/event", EventRouter);
app.use("/user", Auths, UserRouter);
//app.use("/user", UserRouter);

//הגדרת נקודת קצה סופית עבור שגיאת 404 כתובת לא נמצאה

app.all("*", (req,res)=>{
res.status(404).json({Msg:"page not found"});

});

module.exports= app; //ייצוא האפליקציה של אקספרס
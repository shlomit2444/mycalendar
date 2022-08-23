//נתקין אפליקציית אקספרס, נתקין את הספריות הבאות
//npm i nodemon morgan express bcrypt jsonwebtoken dotenv mongoose cors mongodb mysql
const express = require("express");
const app = express();
//הפונקציה מקבלת בקשה ותשובה - שני אובייקטים
//REQ- מייצג את הבקשה, הפנייה לשרת
//RES - מייצד את התשובה, תשובת השרת לבקשה
const cors = require("cors");//האם אני מאפשר גישה לקוד שלי מכתובות מסויימות
const mongoose = require("mongoose");
//כל בקשה שמגיעה נרשמת
const morgan = require("morgan");
//משתנה סביבה
require("dotenv").config();
const Auths = require("./API/V1/middleware/Auths");
//אומר מי יכול  לגשת ברמת אבטחה בסיסית, כאן זה פתוח להכל
app.use(cors());
app.use(morgan("dev")); 
//הבקשה ב BODY תהיה בצורת גייסון
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const EventRouter = require("./API/V1/routes/event");
const UserRouter =  require('./API/V1/routes/user')



//התחברות למסד נתונים
const uri = process.env.MONGO_CONN;
mongoose.connect(uri, {useNewUrlParser:true}).then(()=>{console.log("mongo db conntected")});



//זוהי פונקציה המטפלת בכל שיטות הבקשה
//GET POST PUT DELETE PATCH
//הפונקציה מקבלת את הנתיב ואת הקוד לביצוע
//app.get("/user",)
app.get("/event");//הצכת כל האירועים
app.get("/event/:eid");//הצגת אירוע ספציפי
app.post("/event");//הוספת אירוע
app.put("/event/:eid");//עדכון אירוע
app.delete("/event/:eid");//מחיקת אירוע
//app.post("/user");
//טוען פרטי משתמש לפי שם משתמש
app.get("/user/:uid");
//app.get("/user/");
app.post("user/login");//התחברות עם שם משתמש וסיסמא

app.post("/user/reg");//רישום משתמש חדש
app.put("/user/:uid");//עדכון משתמש
app.delete("/user/:uid");//מחיקת משתמש


//ניתובים
//נתונים
//קונטרולרים

//הגדרת ניתוב
app.use("/user/reg", UserRouter);
app.use("/user",  UserRouter);
app.use("/event", EventRouter);
app.use("/user/login", Auths, UserRouter);
//app.use("/user/login", UserRouter);



//הגדרת נקודת קצה סופית עבור שגיאת 404 כתובת לא נמצאה

//app.all("*", (req,res)=>{
//res.status(404).json({Msg:"page not found"});

//});

module.exports= app; //ייצוא האפליקציה של אקספרס
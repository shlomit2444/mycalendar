// בקובץ זה נגדיר ראוטר ונייצא אותו החוצה

const router = require("express").Router();
const {Login,Reg,DeleteUser,ChangeDetailUser,GetAllUsers} = require("../Controllers/user");
//const {Login,Reg} = require("../countroller/userSQL");
// נגדיר נקודת קצה עבור הרשמה והתחברות

//const {AddUser,GetAllUsers,UpdateUser, DeleteUser,GetUserById} = require('../countroller/user');


//ניתובים עבור שליפה מהדאטהבייס
router.post("/login", Login);
router.post("/reg", Reg);
router.delete("/Uid", DeleteUser);
router.put("/Uid", ChangeDetailUser);
router.get("/", GetAllUsers); 



module.exports = router;
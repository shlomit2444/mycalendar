// בקובץ זה נגדיר ראוטר ונייצא אותו החוצה

const router = require("express").Router();
const {Login,Reg} = require("../Controllers/user");
//const {Login,Reg} = require("../countroller/userSQL");
// נגדיר נקודת קצה עבור הרשמה והתחברות
//const {AddUser,GetAllUsers,UpdateUser, DeleteUser,GetUserById} = require('../countroller/user');
router.post("/login", Login);
router.post("/reg", Reg);
   
module.exports = router;
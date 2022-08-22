
const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>
{
 //שליפת האוטוריזיישן בהידר ובודקים אם הטוקן הקיים הוא תקין   
const authHeader=req.headers.authorization;
console.log(authHeader);
try{
    //מפרידים את הטוקן בהידר ובודקים אם הטוקן מחזיר את הסיסמא אם היא נכונה
    const token=authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(token,process.env.SECRET_KEY);
    next();
}
catch(e){
    console.log(`Un authorized access attemp ${e}`);
    return res.status(401).json({Msg:"Un authorized access attemp"});
   
}




};


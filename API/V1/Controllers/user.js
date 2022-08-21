const mongoose=require('mongoose');
const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');
//const user = require('../models/user');


module.exports={
    Login:(req,res)=>{//
     
       const {Username,Pass}=req.body;
        User.find({Username:Username}).then((rows)=>{
            if(rows.length==0)
             return res.status(200).json({Msg:"Username1 Or Password are Wrong"});
          //משווים בין המחרוזת המוצפנת למחרוזת הלא מוצפנת ואם הם שווים תחזיר אמת
             bcrypt.compare(Pass,rows[0].Pass).then((status)=>{
                if(!status)
                   return res.status(409).json({Msg:"Username Or Password are Wrong"});
                  
                 const token=jwt.sign({Username},process.env.SECRET_KEY,{expiresIn:'1H'});
                 return res.status(200).json({Msg:"Username Logined Successfully",token});
 
                });
                           
        });
       
    },
    
    Reg:(req,res)=>{

        const {Username,Pass,email, Phone,Bdate, Adress}=req.body;
       /*
        User.find({Username}).then((row)=>{
if (rows.length>0)
return res.status(409).json({Msg:"User Already Exist"});

  */     
       
        
        bcrypt.hash(Pass,12,(err,hashPass)=>{
            if(err)
           return res.status(500).json({ServeError:err});
            const user=new User({
                _id:new mongoose.Types.ObjectId(),
                Username:Username,
                 Pass:hashPass,
                email:email,
                Phone:Phone,
                Bdate:Bdate, 
                Adress:Adress

            });
            user.save().then(()=>{
                return res.status(200).json(user)
   
            });

        });
   // }) ;  
    }
};


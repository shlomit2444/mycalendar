const mongoose=require('mongoose');
const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');



module.exports={
    Login:(req,res)=>{//
   
       const {Username,Pass}=req.body;
        User.find({Username:Username}).then((rows)=>{
            if(rows.length==0)
             return res.status(200).json({Msg:"Username Or Password are Wrong"});
          //משווים בין המחרוזת המוצפנת למחרוזת הלא מוצפנת ואם הם שווים תחזיר אמת
             bcrypt.compare(Pass,rows[0].Pass).then((status)=>{
                if(!status)//במידה והסיסמא אינה תואמת נחזיר שגיאה
                   return res.status(409).json({Msg:"Username Or Password are Wrong"});
                  //console.log("ok");
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
    
        bcrypt.hash(Pass,3,(err,hashPass)=>{
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
    },

    DeleteUser:(req,res)=>{
        User.deleteOne({Uid:req.params.Uid}).then((eve)=>{
            return res.status(200).json({Msg:"User Deleted",
            Uid:req.params.Uid
            });

        });
    },

    ChangeDetailUser:(req,res)=>{

        User.updateOne({Uid:req.params.Uid},req.body).then((eve)=>{
            return res.status(200).json(eve);
           
        });
        
    },

    GetAllUsers:(req,res)=>{

        User.find().then((eve)=>{
       
        return  res.status(200).json(eve);
      });
        
    }

};


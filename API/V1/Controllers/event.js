const event=require('../models/event');
const mongoose=require('mongoose');

module.exports={
    GetAllEvents:(req,res)=>{// הצגת כל האירועים
    event.find().then((eve)=>{
       
        return  res.status(200).json(eve);
      });
       
     },
    GetEventById:(req,res)=>{
        // הצגת אירוע לפי קוד אירוע
        event.findOne({Eid:req.params.eid}).then((eve)=>{
        
          return res.status(200).json(eve);
        });
       
    },
    UpdateEvent:(req,res)=>{
        // עדכון אירוע
     
        //שמירת האובייקט
        event.updateOne({Eid:req.params.eid}, req.body).then(()=>{
        
          return res.status(200).json({Msg:"Event Update",
          Eid:req.params.eid
          });
         });
       
     },
    DeleteEvent:(req,res)=>{
        //מחיקת אירוע
            event.deleteOne({Eid:req.params.eid}).then((eve)=>{
            return res.status(200).json({Msg:"Event Deleted",
            eid:req.params.eid
            });
        });
       
     },
    AddEvent:(req,res)=>{
        // הוספת אירוע חדש
        const{Eid,Ename,Picname,Desc,Edate, Uid}=req.body;
        const Eve=new event({
            _id:new mongoose.Types.ObjectId(),
            Eid:Eid,
            Ename:Ename,
            Desc:Desc,
            Picname:Picname,
            Edate:Edate,
            Uid:Uid
        });
        //שמירת האובייקט
        Eve.save().then(()=>{

          return  res.status(200).json({msg:'Event Added by Id '+Eid });
        })
       
     }
}


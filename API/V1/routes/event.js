// בקובץ זה נגדיר ראוטר ונייצא אותו החוצה

const router = require("express").Router();

const {AddEvent,GetAllEvents,UpdateEvent, DeleteEvent,GetEventById} = require('../Controllers/Event');


router.get("/", GetAllEvents);
router.get("/:Eid", GetEventById);
router.delete("/:Eid", DeleteEvent);
router.post("/", AddEvent);
router.put("/:Eid", UpdateEvent);
    /*
    app.patch("/product/:Pid", (req, res)=>{
        const {pname, Price,Picname} = req.body;
        res.status(200).json({req.body});
        });
      */  
    
    
    
    //עדכון מוצר לפי קוד מוצר
   

      module.exports = router;
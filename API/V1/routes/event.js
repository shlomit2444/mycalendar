// בקובץ זה נגדיר ראוטר ונייצא אותו החוצה

const router = require("express").Router();

const {GetAllEvents,GetEventById, DeleteEvent,AddEvent,UpdateEvent} = require('../Controllers/event');

//ניתובים עבור שליפה מהדאטהבייס
router.get("/", GetAllEvents);
router.get("/:eid", GetEventById);
router.delete("/:eid", DeleteEvent);
router.post("/", AddEvent);
router.put("/:eid", UpdateEvent);

    
    
    
    
//עדכון מוצר לפי קוד מוצר

module.exports = router;
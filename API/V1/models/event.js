//נגדיר אובייקט התחברות של סכימה בבסיס נתונים

const mongoose=require("mongoose");
mongoose.pluralize(null);

const EventSchema = mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
Desc:String,
Ename:String,
Edate:String,
Eid:Number
})
//ייצוא מודל עם שם האוסף בבסיס הנתונים והסכימה של המסמכים הכלולים בו
module.exports=mongoose.model("Events", EventSchema)
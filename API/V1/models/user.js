const mongoose=require('mongoose');
mongoose.pluralize(null);
const UserSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  Username:String,
  Pass:String,
  Uid:String, 
  Adress:String, 
  email:String,
  Bdate:String,
  Phone:String
  
//Bdate:{type:Date, default:Date.now},
  
});
//ייצוא מודל עם שם האוסף בבסיס הנתונים והסכימה של המסמכים הכלולים בו
module.exports=mongoose.model("Users", UserSchema);
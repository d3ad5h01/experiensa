const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Interncard = require("./interncard").schema;
//const bcrypt = require('bcrypt-nodejs');


const UserSchema = new Schema({
  name: String,
  profile: {type : String},
  resume: {type : String},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // address: { type: Schema.Types.ObjectId, ref: "Address" },
  //array of applied internships here
  internships: [{type: Interncard, unique: true}],
  role: String,

  sem: String,
  bio: String,
  section: String,
  batch: String,
  phone: String,
  addr_line: String,
  city: String,
  state: String,
  country: String,
});

// UserSchema.pre("save", function(next) {
//   let user = this;
//   if(this.isModified("password") || this.isNew){
//     bcrypt.genSalt(10, function(err,salt){
//       if(err){
//         return next(err);
//       }
//
//       bcrypt.hash(user.password,salt,null, function(er,hash){
//         if(er){
//           return next(er);
//         }
//
//         user.password = hash;
//         next();
//       })
//     })
//   } else {
//     return next();
//   }
// });
//
// UserSchema.methods.comparePassword = function(password, next) {
//   let user = this;
//   return bcrypt.compareSync(password, user.password);
// };

module.exports = mongoose.model("User", UserSchema);

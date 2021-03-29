const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: Schema.Types.ObjectId, ref: "Address" },
  //array of applied internships here
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

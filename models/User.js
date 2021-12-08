var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//user schema
var UserSchema = new Schema(
  {
    firstName: {type: String, required: true, MaxLength: 100},
    lastName: {type: String, required: true, MaxLength: 100},
    userID: {type: Number, required: true},
    postedPhotos: [{type: Schema.Types.ObjectID, ref: 'Photo'}]
  }
);

//Virtual
UserSchema
.virtual('name')
.get(function() {
  return this.LastName + ',' + this.FirstName;
});

module.exports = mongoose.model('User', UserSchema);

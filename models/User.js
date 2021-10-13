const mognoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mognoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password == hash;

            next();
        })
        .catch((err) => new Error (err));
});

const User = mognoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema(
    {
        name: {type: String, required:true},
        email: {type: String, required:true, unique:true},
        password: { type: String, required: true },
        pic: {
            type: String, 
            default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        },
    },
    {
        timestamps:true,
    }
);
//comparing the entered password with actual password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    
}
// 'pre' means before saving, if it is crypted then go to next else it will incrept thr password
userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();        
    }
    //the higher the number the stronger the salt is generated
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});
const User = mongoose.model("User", userSchema);
module.exports = User;
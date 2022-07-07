import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    // intro: {
    //     type: String,
    //     required: true,
    // },
    // aboutMe: {
    //     type: String,
    //     required: true,
    // },
    skillImage: {
        data: Buffer,
        contentType: String,
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

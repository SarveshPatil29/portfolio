import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    name: {
        type: String,
        default: "Sarvesh",
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    intro: {
        type: String,
        default: "intro",
    },
    introImg: {
        type: String,
    },
    aboutMe: {
        type: String,
        default: "aboutMe",
    },
    aboutMeImg: {
        type: String,
    },
    skills: [
        {
            name: {
                type: String,
            },
            img: {
                type: String,
            },
        },
    ],
    projects: [
        {
            title: {
                type: String,
            },
            type: {
                type: String,
            },
            desc: {
                type: String,
            },
            appLink: {
                type: String,
            },
            github: {
                type: String,
            },
            img: {
                type: String,
            },
        },
    ],
    exp: [
        {
            jobTitle: {
                type: String,
            },
            company: {
                type: String,
            },
            timePeriod: {
                type: String,
            },
            location: {
                type: String,
            },
            desc: {
                type: String,
            },
        },
    ],
    ach: [
        {
            name: {
                type: String,
            },
            position: {
                type: String,
            },
        },
    ],
    handles: [
        {
            name: {
                type: String,
            },
            link: {
                type: String,
            },
        },
    ],
});

const UserProfile =
    mongoose.models.UserProfile ||
    mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;

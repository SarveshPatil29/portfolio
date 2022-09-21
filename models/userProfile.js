import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    name: {
        type: String,
        default: "Sarvesh Patil",
    },
    email: {
        type: String,
    },
    intro: {
        type: String,
        default: "intro",
    },
    introImg: {
        type: String,
        default:
            "https://res.cloudinary.com/sarveshp46/image/upload/c_scale,w_1000/v1657258037/1656832322291_sp2pez.jpg",
    },
    aboutMe: {
        type: String,
        default: "aboutMe",
    },
    aboutMeImg: {
        type: String,
        default:
            "https://res.cloudinary.com/sarveshp46/image/upload/c_scale,w_1000/v1657258037/1656832322291_sp2pez.jpg",
    },
    skills: [
        {
            name: {
                type: String,
                default: "REACTJS",
            },
            img: {
                type: String,
                default:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/react_kemmts.png",
            },
        },
    ],
    projects: [
        {
            title: {
                type: String,
                default: "PORTFOLIO PRO",
            },
            type: {
                type: String,
                default: "WEBSITE",
            },
            desc: {
                type: String,
                default: "THIS APP ALLOWS TO CREATE YOUR OWN PORTFOLIO WEBSITE",
            },
            appLink: {
                type: String,
                default: "https://portfolio-sarveshpatil46.vercel.app/",
            },
            github: {
                type: String,
                default: "https://github.com/SarveshPatil46/portfolio",
            },
            img: {
                type: String,
                default:
                    "https://res.cloudinary.com/sarveshp46/image/upload/c_scale,w_1000/v1657287953/Screenshot_2022-07-08_at_7.15.33_PM_qgrfcr.png",
            },
        },
    ],
    exp: [
        {
            jobTitle: {
                type: String,
                default: "ANDROID DEVELEPER INTERN",
            },
            company: {
                type: String,
                default: "EXPOSYS DATA LABS",
            },
            timePeriod: {
                type: String,
                default: "DEC 2021 - JAN 2022",
            },
            location: {
                type: String,
                default: "ONLINE",
            },
            desc: {
                type: String,
                default: "CREATED A CHAT APPLICATION",
            },
        },
    ],
    ach: [
        {
            name: {
                type: String,
                default: "CODE-O-FIESTA",
            },
            position: {
                type: String,
                default: "2ND",
            },
        },
    ],
    handles: [
        {
            name: {
                type: String,
                default: "GITHUB",
            },
            link: {
                type: String,
                default: "https://github.com/SarveshPatil46",
            },
        },
    ],
});

const UserProfile =
    mongoose.models.UserProfile ||
    mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;

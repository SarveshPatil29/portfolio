import mongoose from "mongoose";
import UserProfile from "./userProfile.js";

mongoose
    .connect(
        "mongodb+srv://sarvesh2902:Hi5JUL8XES1YAmOU@cluster0.wfnik3x.mongodb.net/portfolio?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to Mongo");
    })
    .catch((e) => {
        console.log("Failed to connect to Mongo");
        console.log(e);
    });

const user = new UserProfile({
    name: "Sarvesh",
    email: "sarvesh2902@gmail.com",
    intro: "My name is Sarvesh Patil",
    aboutMe:
        "I am a Web Developer skilled with ReactJS, NextJS, NodeJS, ExpressJS, MongoDB",
    skills: [
        {
            name: "React",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            name: "NodeJS",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            name: "ExpressJS",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            name: "MongoDB",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            name: "NextJS",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            name: "Cloudinary",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
    ],
    projects: [
        {
            title: "Portfolio Pro",
            type: "Website",
            desc: "description",
            appLink: "https://portfolio-sarveshpatil46.vercel.app/",
            github: "https://github.com/SarveshPatil46/portfolio",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            title: "Portfolio Pro",
            type: "Website",
            desc: "description",
            appLink: "https://portfolio-sarveshpatil46.vercel.app/",
            github: "https://github.com/SarveshPatil46/portfolio",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            title: "Portfolio Pro",
            type: "Website",
            desc: "description",
            appLink: "https://portfolio-sarveshpatil46.vercel.app/",
            github: "https://github.com/SarveshPatil46/portfolio",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
        {
            title: "Portfolio Pro",
            type: "Website",
            desc: "description",
            appLink: "https://portfolio-sarveshpatil46.vercel.app/",
            github: "https://github.com/SarveshPatil46/portfolio",
            img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
        },
    ],
    exp: [
        {
            jobTitle: "WEB DEVELOPER INTERN",
            company: "Google",
            timePeriod: "Dec 2021 - Jan 2023",
            location: "Mumbai",
            desc: "description",
        },
        {
            jobTitle: "WEB DEVELOPER INTERN",
            company: "Google",
            timePeriod: "Dec 2021 - Jan 2023",
            location: "Mumbai",
            desc: "description",
        },
        {
            jobTitle: "WEB DEVELOPER INTERN",
            company: "Google",
            timePeriod: "Dec 2021 - Jan 2023",
            location: "Mumbai",
            desc: "description",
        },
        {
            jobTitle: "WEB DEVELOPER INTERN",
            company: "Google",
            timePeriod: "Dec 2021 - Jan 2023",
            location: "Mumbai",
            desc: "description",
        },
        {
            jobTitle: "WEB DEVELOPER INTERN",
            company: "Google",
            timePeriod: "Dec 2021 - Jan 2023",
            location: "Mumbai",
            desc: "description",
        },
        {
            jobTitle: "WEB DEVELOPER INTERN",
            company: "Google",
            timePeriod: "Dec 2021 - Jan 2023",
            location: "Mumbai",
            desc: "description",
        },
    ],
    ach: [
        {
            name: "Code-O-Fiesta",
            position: "2nd",
        },
        {
            name: "Code-O-Fiesta",
            position: "2nd",
        },
        {
            name: "Code-O-Fiesta",
            position: "2nd",
        },
        {
            name: "Code-O-Fiesta",
            position: "2nd",
        },
    ],
    handles: [
        {
            name: "Github",
            link: "https://github.com/SarveshPatil46",
        },
        {
            name: "Github",
            link: "https://github.com/SarveshPatil46",
        },
        {
            name: "Github",
            link: "https://github.com/SarveshPatil46",
        },
        {
            name: "Github",
            link: "https://github.com/SarveshPatil46",
        },
        {
            name: "Github",
            link: "https://github.com/SarveshPatil46",
        },
        {
            name: "Github",
            link: "https://github.com/SarveshPatil46",
        },
    ],
});

user.save()
    .then(() => {
        console.log("Saved successfully");
    })
    .catch((e) => {
        console.log("Failed to save");
        console.log(e);
    });

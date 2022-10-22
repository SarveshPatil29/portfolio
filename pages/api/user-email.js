import mongoose from "mongoose";
import UserProfile from "../../models/userProfile";

export default async function handler(req, res) {
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

    if (req.method === "GET") {
        let userProfile = await UserProfile.findOne({ email: req.query.email });
        if (!userProfile) {
            const newUser = {
                name: "Your Name",
                email: req.query.email,
                intro: "Your Introduction",
                introImg:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1666447172/portfolio/user-profile_kj3prs.png",
                aboutMe: "Write something about yourself",
                aboutMeImg:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1666447172/portfolio/user-profile_kj3prs.png",
                isAdmin: false,
                skills: [
                    {
                        name: "REACT",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/portfolio/react_kemmts.png",
                        _id: "6353f2d8ff0309af86079eeb",
                    },
                    {
                        name: "REACT",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/portfolio/react_kemmts.png",
                        _id: "6353f2d8ff0309af86079eec",
                    },
                    {
                        name: "REACT",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/portfolio/react_kemmts.png",
                        _id: "6353f2d8ff0309af86079eed",
                    },
                ],
                projects: [
                    {
                        title: "PORTFOLIO PRO",
                        type: "Website",
                        desc: "Project Description",
                        appLink: "https://portfolio-sarveshpatil29.vercel.app/",
                        github: "https://github.com/SarveshPatil29/portfolio",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657342342/portfolio/Portfolio-update_wjuawf.jpg",
                        _id: "6353f2d8ff0309af86079eee",
                    },
                    {
                        title: "PORTFOLIO PRO",
                        type: "Website",
                        desc: "Project Description",
                        appLink: "https://portfolio-sarveshpatil29.vercel.app/",
                        github: "https://github.com/SarveshPatil29/portfolio",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657342342/portfolio/Portfolio-update_wjuawf.jpg",
                        _id: "6353f2d8ff0309af86079eef",
                    },
                    {
                        title: "PORTFOLIO PRO",
                        type: "Website",
                        desc: "Project Description",
                        appLink: "https://portfolio-sarveshpatil29.vercel.app/",
                        github: "https://github.com/SarveshPatil29/portfolio",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657342342/portfolio/Portfolio-update_wjuawf.jpg",
                        _id: "6353f2d8ff0309af86079ef0",
                    },
                ],
                exp: [
                    {
                        jobTitle: "WEB DEVELOPER INTERN",
                        company: "Google",
                        timePeriod: "Dec 2021 - Jan 2023",
                        location: "Mumbai",
                        desc: "Job Description",
                        _id: "6353f2d8ff0309af86079ef1",
                    },
                    {
                        jobTitle: "WEB DEVELOPER INTERN",
                        company: "Google",
                        timePeriod: "Dec 2021 - Jan 2023",
                        location: "Mumbai",
                        desc: "Job Description",
                        _id: "6353f2d8ff0309af86079ef2",
                    },
                    {
                        jobTitle: "WEB DEVELOPER INTERN",
                        company: "Google",
                        timePeriod: "Dec 2021 - Jan 2023",
                        location: "Mumbai",
                        desc: "Job Description",
                        _id: "6353f2d8ff0309af86079ef3",
                    },
                ],
                ach: [
                    {
                        name: "Competition",
                        position: "Your Position (1st/2nd)",
                        _id: "6353f2d8ff0309af86079ef4",
                    },
                    {
                        name: "Competition",
                        position: "Your Position (1st/2nd)",
                        _id: "6353f2d8ff0309af86079ef5",
                    },
                    {
                        name: "Competition",
                        position: "Your Position (1st/2nd)",
                        _id: "6353f2d8ff0309af86079ef6",
                    },
                ],
                handles: [
                    {
                        name: "Github",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666437239/portfolio-uploads/githubLogo_dveobq.png",
                        _id: "6353f2d8ff0309af86079ef7",
                    },
                    {
                        name: "linkedin",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666437239/portfolio-uploads/linkedinLogo_atnlyt.png",
                        _id: "6353f2d8ff0309af86079ef8",
                    },
                    {
                        name: "twitter",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666437240/portfolio-uploads/twitterLogo_d7kssz.png",
                        _id: "6353f2d8ff0309af86079ef9",
                    },
                    {
                        name: "instagram",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666437240/portfolio-uploads/instagramLogo_nyweny.png",
                        _id: "6353f2d8ff0309af86079efa",
                    },
                    {
                        name: "facebook",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666437239/portfolio-uploads/facebookLogo_j2qanl.png",
                        _id: "6353f2d8ff0309af86079efb",
                    },
                ],
            };

            const user = new UserProfile(newUser);
            await user.save();
            userProfile = await UserProfile.findOne({
                email: req.query.email,
            });
        }
        console.log(userProfile);
        res.status(200).json(userProfile);
    }
    // else if (req.method === "POST") {
    //     const formData = req.body.formData;
    //     const user = new UserProfile(formData);
    //     await user.save();
    //     res.send(user);
    // }
}

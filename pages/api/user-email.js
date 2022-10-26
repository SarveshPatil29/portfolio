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
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1666500903/portfolio/user-profile_e7zgv2.jpg",
                aboutMe: "Write something about yourself",
                aboutMeImg:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1666533051/portfolio/user-profile2_gbhkxk.jpg",
                isAdmin: false,
                skills: [
                    {
                        name: "REACT",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/portfolio/react_kemmts.png",
                        _id: "6353f2d8ff0309af86079eeb",
                    },
                ],
                projects: [
                    {
                        title: "PORTFOLIO PRO",
                        type: "Website",
                        desc: "Portfolio Pro is a portfolio generator tool which allows you to create a portfolio customized to your likings and skill sets",
                        appLink: "https://portfolio-pro.one/",
                        github: "https://github.com/SarveshPatil29/portfolio",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657342342/portfolio/Portfolio-update_wjuawf.jpg",
                        _id: "6353f2d8ff0309af86079eee",
                    },
                ],
                exp: [
                    {
                        jobTitle: "WEB DEVELOPER INTERN",
                        company: "Google",
                        timePeriod: "Dec 2021 - Jan 2023",
                        location: "Mumbai",
                        desc: "Developed backend apis for Google's Cloud Platform",
                        _id: "6353f2d8ff0309af86079ef1",
                    },
                ],
                ach: [
                    {
                        name: "Competition",
                        position: "Your Position (1st/2nd/3rd)",
                        _id: "6353f2d8ff0309af86079ef4",
                    },
                ],
                handles: [
                    {
                        name: "Github",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/githubLogo_gtmev3.png",
                        _id: "6353f2d8ff0309af86079ef7",
                    },
                    {
                        name: "linkedin",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/linkedinLogo_aewtwd.png",
                        _id: "6353f2d8ff0309af86079ef8",
                    },
                    {
                        name: "twitter",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794177/portfolio/twitterLogo_zdffgg.png",
                        _id: "6353f2d8ff0309af86079ef9",
                    },
                    {
                        name: "instagram",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/instagramLogo_fyozok.png",
                        _id: "6353f2d8ff0309af86079efa",
                    },
                    {
                        name: "facebook",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/facebookLogo_njnxd6.png",
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
}

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
                _id: { $oid: "6353f0baff0309af86079ee6" },
                name: "Sarvesh Patil",
                email: "2020.sarvesh.patil@ves.ac.in",
                intro: "intro",
                introImg:
                    "https://res.cloudinary.com/sarveshp46/image/upload/c_scale,w_1000/v1657258037/1656832322291_sp2pez.jpg",
                aboutMe: "aboutMe",
                aboutMeImg:
                    "https://res.cloudinary.com/sarveshp46/image/upload/c_scale,w_1000/v1657258037/1656832322291_sp2pez.jpg",
                isAdmin: false,
                skills: [],
                projects: [],
                exp: [],
                ach: [],
                handles: [],
                __v: { $numberInt: "0" },
            };
            const user = new UserProfile({ email: req.query.email });
            await user.save();
            userProfile = await UserProfile.findOne({
                email: req.query.email,
            });
        }
        res.status(200).json(userProfile);
    }
    // else if (req.method === "POST") {
    //     const formData = req.body.formData;
    //     const user = new UserProfile(formData);
    //     await user.save();
    //     res.send(user);
    // }
}

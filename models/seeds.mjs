import mongoose from "mongoose";
import User from "./user.js";

mongoose
    .connect("mongodb://localhost:27017/portfolio", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to Mongo");
    })
    .catch((e) => {
        console.log("Failed to connect to Mongo");
        console.log(e);
    });

const user = new User({
    name: "Atharva",
    email: "sarvesh2902@gmail.com",
    password: "sarvesh2902",
});

user.save()
    .then(() => {
        console.log("Saved successfully");
    })
    .catch((e) => {
        console.log("Failed to save");
        console.log(e);
    });

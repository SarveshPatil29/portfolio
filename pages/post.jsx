import { useState } from "react";

export default function Post() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        intro: "",
        aboutMe: "",
        skills: [
            {
                name: "",
                img: "",
            },
        ],
        projects: [
            {
                title: "",
                type: "",
                desc: "",
                appLink: "",
                github: "",
                img: "",
            },
        ],
        exp: [
            {
                jobTitle: "",
                company: "",
                timePeriod: "",
                location: "",
                desc: "",
            },
        ],
        ach: [
            {
                name: "",
                position: "",
            },
        ],
        handles: [
            {
                name: "",
                link: "",
            },
        ],
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await fetch("/api/user-profile", {
            method: "POST",
            body: JSON.stringify({ formData }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>POST</h1>
            <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="name"
            />
            <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="email"
            />
            <input
                value={formData.intro}
                onChange={handleChange}
                type="text"
                id="intro"
                name="intro"
                placeholder="intro"
            />
            <input
                value={formData.aboutMe}
                onChange={handleChange}
                type="text"
                id="aboutMe"
                name="aboutMe"
                placeholder="aboutMe"
            />

            <div>SKILLS</div>
            <input
                value={formData.skills.name}
                onChange={handleChange}
                type="text"
                id="skillName"
                name="skillName"
                placeholder="skillName"
            />
            <input
                value={formData.skills.img}
                onChange={handleChange}
                type="text"
                id="skillImg"
                name="skillImg"
                placeholder="skillImg"
            />
            <div>PROJECTS</div>
            <input
                value={formData.projects.title}
                onChange={handleChange}
                type="text"
                id="projectTitle"
                name="projectTitle"
                placeholder="projectTitle"
            />
            <input
                value={formData.projects.type}
                onChange={handleChange}
                type="text"
                id="projectType"
                name="projectType"
                placeholder="projectType"
            />
            <input
                value={formData.projects.desc}
                onChange={handleChange}
                type="text"
                id="projectDesc"
                name="projectDesc"
                placeholder="projectDesc"
            />
            <input
                value={formData.projects.appLink}
                onChange={handleChange}
                type="text"
                id="projectappLink"
                name="projectappLink"
                placeholder="projectappLink"
            />
            <input
                value={formData.projects.github}
                onChange={handleChange}
                type="text"
                id="projectgithub"
                name="projectgithub"
                placeholder="projectgithub"
            />
            <input
                value={formData.projects.img}
                onChange={handleChange}
                type="text"
                id="projectImg"
                name="projectImg"
                placeholder="projectImg"
            />
            <div>EXPERIENCE</div>
            <input
                value={formData.exp.jobTitle}
                onChange={handleChange}
                type="text"
                id="expJobTitle"
                name="expJobTitle"
                placeholder="expJobTitle"
            />
            <input
                value={formData.exp.company}
                onChange={handleChange}
                type="text"
                id="expCompany"
                name="expCompany"
                placeholder="expCompany"
            />
            <input
                value={formData.exp.timePeriod}
                onChange={handleChange}
                type="text"
                id="expTimePeriod"
                name="expTimePeriod"
                placeholder="expTimePeriod"
            />
            <input
                value={formData.exp.location}
                onChange={handleChange}
                type="text"
                id="expLocation"
                name="expLocation"
                placeholder="expLocation"
            />
            <input
                value={formData.exp.desc}
                onChange={handleChange}
                type="text"
                id="expDesc"
                name="expDesc"
                placeholder="expDesc"
            />
            <div>ACHIEVEMENTS</div>
            <input
                value={formData.ach.name}
                onChange={handleChange}
                type="text"
                id="achName"
                name="achName"
                placeholder="achName"
            />
            <input
                value={formData.ach.position}
                onChange={handleChange}
                type="text"
                id="achPosition"
                name="achPosition"
                placeholder="achPosition"
            />
            <div>HANDLES</div>
            <input
                value={formData.handles.name}
                onChange={handleChange}
                type="text"
                id="handleName"
                name="handleName"
                placeholder="handleName"
            />
            <input
                value={formData.handles.link}
                onChange={handleChange}
                type="text"
                id="handleLink"
                name="handleLink"
                placeholder="handleLink"
            />
            <button>Submit</button>
        </form>
    );
}

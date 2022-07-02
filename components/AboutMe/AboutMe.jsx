import classes from "./AboutMe.module.css";

function AboutMe() {
    return (
        <div>
            <section className={classes.intro}>
                <div>
                    <p>THIS IS ME</p>
                    <p>NAME</p>
                    <p>DESCRIPTION</p>
                </div>
                <img
                    src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    alt="Profile Image"
                />
            </section>
            <section className={classes.aboutMe}>
                <img
                    src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    alt="Profile Image"
                />
                <div>
                    <p>ABOUT ME</p>
                    <p>DESCRIPTION</p>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;

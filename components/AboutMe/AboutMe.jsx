import classes from "./AboutMe.module.css";
import { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";

function AboutMe(props) {
    const [isShownIntro, setIsShownIntro] = useState(false);
    const [isShownAbout, setIsShownAbout] = useState(false);
    return (
        <div>
            <section
                onMouseEnter={() => setIsShownIntro(true)}
                onMouseLeave={() => setIsShownIntro(false)}
                style={{ paddingTop: "2%" }}
                className={classes.intro}
            >
                <div className={classes.introText}>
                    <p>THIS IS ME</p>
                    <p>SARVESH PATIL</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit quasi possimus saepe a! Numquam libero,
                        perferendis dolore quisquam, ipsum hic tempore laborum
                        excepturi magni in, sint possimus placeat nisi
                        veritatis. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Architecto, numquam alias esse nulla,
                        asperiores eaque quas illo libero rerum sunt quidem
                        deleniti ex exercitationem modi quis hic consectetur
                        maiores qui?
                    </p>
                </div>
                <img
                    className={classes.introImg}
                    src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    alt="Profile Image"
                />
                <div className={classes.editBtnIntro}>
                    {props.isEdit && isShownIntro && (
                        <EditBtn width={50} height={50} />
                    )}
                </div>
            </section>
            <section
                onMouseEnter={() => setIsShownAbout(true)}
                onMouseLeave={() => setIsShownAbout(false)}
                className={classes.aboutMe}
            >
                <img
                    className={classes.aboutMeImg}
                    src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    alt="Profile Image"
                />
                <div className={classes.aboutMeText}>
                    <p>ABOUT ME</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt, quis, exercitationem minima alias nam magni
                        expedita reprehenderit blanditiis, magnam aliquid
                        explicabo. Enim, magni! Saepe dolore iste eaque, aliquam
                        doloremque dolores? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Debitis sapiente incidunt
                        modi accusantium maxime quo et obcaecati fuga, a dolor
                        officia! Reiciendis velit architecto nulla impedit
                        nobis, libero nemo! Dolor.
                    </p>
                </div>
                <div className={classes.editBtnAbout}>
                    {props.isEdit && isShownAbout && (
                        <EditBtn width={50} height={50} />
                    )}
                </div>
            </section>
        </div>
    );
}

export default AboutMe;

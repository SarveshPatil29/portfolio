import classes from "./Skills.module.css";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState } from "react";
import profile from "../../public/images/profile.jpg";
import Image from "next/image";

function Skills(props) {
    const [isShownEdit, setIsShownEdit] = useState(false);
    const [isShownDel, setIsShownDel] = useState(false);

    function handleMouseEnter() {
        if (props.isEdit) {
            setIsShownEdit(true);
            setIsShownDel(true);
        }
    }

    function handleMouseLeave() {
        if (props.isEdit) {
            setIsShownEdit(false);
            setIsShownDel(false);
        }
    }

    return (
        <section>
            <br id="skills" />
            <h1 className={classes.header}>SKILLS</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classes.allSkills}
            >
                <div className={classes.skill}>
                    <div className={classes.editBtn}>
                        {props.isEdit && isShownEdit && (
                            <EditBtn width={30} height={30} />
                        )}
                    </div>
                    <div className={classes.delBtn}>
                        {props.isEdit && isShownDel && (
                            <DelBtn width={25} height={25} />
                        )}
                    </div>
                    <Image
                        className={classes.skillImg}
                        width={75}
                        height={75}
                        src={profile}
                        alt="react logo"
                    />
                    <h2>REACT</h2>
                </div>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn width={40} height={40} item={"skill"} />
                </div>
            )}
        </section>
    );
}

export default Skills;

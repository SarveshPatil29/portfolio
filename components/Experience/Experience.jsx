import classes from "./Experience.module.css";
import { Card } from "react-bootstrap";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState } from "react";

function Experience(props) {
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
            <br id="experience" />
            <h1 className={classes.header}>EXPERIENCE</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classes.allExp}
            >
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "36rem" }} className={classes.exp}>
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
                    <Card.Body>
                        <div className={classes.titleLoc}>
                            <Card.Title>ANDROID DEVELOPER INTERN</Card.Title>
                            <Card.Text className={classes.loc}>
                                ONLINE
                            </Card.Text>
                        </div>
                        <Card.Text className={classes.company}>
                            EXPOSYS DATA LABS
                        </Card.Text>
                        <Card.Text className={classes.timePeriod}>
                            DEC 2021 - JAN 2022
                        </Card.Text>
                        <Card.Text className={classes.desc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat similique officia explicabo accusamus
                            in natus ad id, fugit, consequuntur harum
                            voluptatibus maiores nisi deserunt nemo accusantium
                            temporibus soluta corrupti non. Lorem, ipsum dolor
                            sit amet consectetur adipisicing elit. Distinctio
                            rerum maiores nesciunt ipsum iusto cupiditate quos
                            omnis quidem numquam corrupti blanditiis laborum
                            dolores officiis, magni repellendus nam in
                            architecto voluptates!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn width={40} height={40} item={"experience"} />
                </div>
            )}
        </section>
    );
}

export default Experience;

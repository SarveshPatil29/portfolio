import classes from "./Projects.module.css";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import githubLogo from "../../public/images/githubLogo.png";
import Image from "next/image";

function Projects(props) {
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
            <br id="projects" />
            <h1 className={classes.header}>PROJECTS</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classes.allProjects}
            >
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className={classes.project}>
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
                    <Card.Img
                        variant="top"
                        src="https://avatars.githubusercontent.com/u/92196450?v=4"
                    />
                    <Card.Body>
                        <div className={classes.titleType}>
                            <Card.Title>PROJECT TITLE</Card.Title>
                            <p className={classes.type}>PROJECT TYPE</p>
                        </div>
                        <Card.Text>PROJECT DESCRIPTION</Card.Text>
                        <div className={classes.links}>
                            <Button
                                href="https://github.com/SarveshPatil46"
                                variant="dark"
                            >
                                VIEW APPLICATION
                            </Button>
                            <Link href="https://github.com/SarveshPatil46">
                                <Image
                                    className={classes.githubLogo}
                                    width={40}
                                    height={40}
                                    src={githubLogo}
                                    alt="github logo"
                                />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn width={40} height={40} item={"project"} />
                </div>
            )}
        </section>
    );
}

export default Projects;

import homeimg from "../../public/images/homeimg.jpg";
import Image from "next/image";
import classes from "./HomeBody.module.css";
import Button from "react-bootstrap/Button";

export default function HomeBody() {
    return (
        <div className={classes.content}>
            <div className={classes.text}>
                <h1> CREATE A PORTFOLIO WEBSITE </h1>
                <h3>
                    SHOWCASE YOUR WORK ONLINE WITH A PORTFOLIO WEBSITE AND STAND
                    OUT FROM YOUR COMPETITORS
                </h3>
                <Button
                    href="/getstarted"
                    variant="dark"
                    className={classes.button}
                >
                    GET STARTED
                </Button>
            </div>

            <div className={classes.image}>
                <Image src={homeimg} alt="home-image" />
            </div>
        </div>
    );
}

import homeimg from "../../public/images/homeimg.jpg";
import Image from "next/image";
import classes from "./HomeBody.module.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export default function HomeBody() {
    return (
        <div className={classes.body}>
            <Card className={classes.img} border="light">
                <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/sarveshp46/image/upload/v1657342342/Portfolio-update_wjuawf.jpg"
                />
            </Card>
            <Card border="light" className={classes.text}>
                <Card.Body>
                    <Card.Title className="fs-1">
                        CREATE A PORTFOLIO WEBSITE
                    </Card.Title>
                    <Card.Text>
                        SHOWCASE YOUR WORK ONLINE WITH A PORTFOLIO WEBSITE AND
                        STAND OUT FROM YOUR COMPETITORS
                    </Card.Text>
                    <Button variant="dark" href="/dashboard">
                        GET STARTED
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

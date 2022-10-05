import homeimg from "../../public/images/homeimg.jpg";
import background from "../../public/images/background.jpg";
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
          src="https://res.cloudinary.com/drr7rbizq/image/upload/v1663826002/bg_xa5thx.jpg"
            //     <h3> fresh coffee in the morning </h3>
            //     <p>
            //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            //       labore, sint cupiditate distinctio tempora reiciendis.
            //     </p>
            //     <a href="#" class="btn">
            //       get yours now
            //     </a>
            //   </div>
            // </section>
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
      <br></br>
      {/* <Card className={classes.img} border="light">
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/drr7rbizq/image/upload/v1663826002/bg_xa5thx.jpg"
        />
      </Card> */}

      {/* <Card border="light" className={classes.text}>
        <Card.Body>
          <Card.Title className="fs-1">CREATE A PORTFOLIO WEBSITE</Card.Title>
          <Card.Text>
            SHOWCASE YOUR WORK ONLINE WITH A PORTFOLIO WEBSITE AND STAND OUT
            FROM YOUR COMPETITORS
          </Card.Text>
        <Card.Img
            variant="right"
            src="https://res.cloudinary.com/drr7rbizq/image/upload/v1663826002/bg_xa5thx.jpg" /> */}
          {/* /* <Button variant="dark" href="/dashboard">
                        GET STARTED
                    </Button> */ }
        {/* </Card.Body>
      </Card> */}

      {/* <Card className={classes.info} border="light">
         <Card border="light" className={classes.text}>
            <Card.Body>
            <Card.Title className="fs-1">About Us</Card.Title>
            <Card.Text>
                SHOWCASE YOUR WORK ONLINE WITH A PORTFOLIO WEBSITE AND STAND OUT
                FROM YOUR COMPETITORS
            </Card.Text>
            </Card.Body>
         </Card>
            <Card.Img
            variant="top"
            src="https://res.cloudinary.com/drr7rbizq/image/upload/v1663826002/bg_xa5thx.jpg"
            /> */}
      {/* <main>
          <strong>About Us</strong>
          <p>
            What is the best way to get what you want?" she asked. He looked
            down at the ground knowing that she wouldn't like his answer. He
            hesitated, knowing that the truth would only hurt. How was he going
            to tell her that the best way for him to get what he wanted was to
            leave her
          </p>
        </main> */}
      {/* </Card> */}
    </div>
  );
}

<<<<<<< HEAD
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
=======
import React from "react";

export default function HomeBody() {
    return (
        <div className="mb-10">
            <div className="h-max w-full pb-10">
                <div className="relative">
                    <img
                        src="https://res.cloudinary.com/sarveshp46/image/upload/v1666788405/portfolio/home-image_yhskka.jpg"
                        className="bg-cover h-full w-full"
                    />
                    <h2 className="absolute text-4xl text-white bottom-4 left-1/2 -translate-x-1/2">
                        Kick start your professional career with us!
                    </h2>
                </div>
            </div>

            <div className="flex px-16 items-center h-96 mt-12">
                <div className="flex-1 text-center">
                    <img
                        src="https://res.cloudinary.com/sarveshp46/image/upload/v1666789555/portfolio/portfolio-1_rbimpt.jpg"
                        alt=""
                    />
                </div>
                <div className="flex-1">
                    <div className="px-20">
                        <div className="text-4xl text-left text-gray-900 font-bold">
                            Need of Portfolio
                        </div>
                        <p className="text-2xl text-slate-800">
                            Portfolios show the cumulative efforts and learning
                            of a particular student over time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex px-16 items-center h-96 mt-20">
                <div className="flex-1">
                    <div className="px-20">
                        <div className="text-4xl text-left text-gray-900 font-bold">
                            Customized Portfolio
                        </div>
                        <p className="text-2xl text-slate-800">
                            Create a cohesive portfolio for your body of work,
                            no matter what you make. Combine blank and pre-built
                            sections and use text, imagery, or videos to
                            highlight each piece.
                        </p>
                    </div>
                </div>
                <div className="flex-1 text-center">
                    <img
                        src="https://res.cloudinary.com/drr7rbizq/image/upload/v1664983443/customized_eyurwy.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
>>>>>>> 484c6a5b7cfd3176f736b4424b23bae586163817
}

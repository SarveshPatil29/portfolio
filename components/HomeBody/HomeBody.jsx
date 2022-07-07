import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import classes from "./HomeBody.module.css";
import pic from "../../public/images/pic.jpeg"
import Image from "next/image"


export default function HomeBody() {
  return (
    <div className={classes.TextBody}>
      <div className={classes.column1}>
        <h1> CREATE A PORTFOLIO WEBSITE </h1>
        <h3>
          SHOWCASE YOUR WORK ONLINE WITH A PORTFOLIO WEBSITE AND STAND OUT FROM
          YOUR COMPETITORS
        </h3>
       
        <Button variant="dark">GET STARTED</Button> 
       </div>

      <div className={classes.column2}>
        <Image src={pic} />
      </div>
    </div>
  );
}

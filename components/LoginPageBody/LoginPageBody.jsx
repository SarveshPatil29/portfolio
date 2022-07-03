import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import classes from "./LoginPageBody.module.css";
import { Fragment } from "react";
import Image from "next/dist/client/image";
import githubLogo from "../../public/images/githubLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";
import googleLogo from "../../public/images/googleLogo.png";

export default function LoginPageBody() {
  return (
    <Fragment className={classes.wholecontent}>
      <div className={classes.header}>
        <h1>LOG IN TO PORTFOLIO PRO</h1>
      </div>

      <div className={classes.column1}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      </div>

      <div className={classes.column2}>
        <Button variant="light">
          <Image width={25} height={25} src={googleLogo} /> CONTINUE WITH GOOGLE
        </Button>

        <Button variant="light">
          <Image width={25} height={25} src={githubLogo} /> CONTINUE WITH GITHUB
        </Button>

        <Button variant="light">
          <Image width={25} height={25} src={facebookLogo} /> CONTINUE WITH
          FACEBOOK
        </Button>
      </div>

      <div>
        <Button> CANNOT LOGIN?</Button>
      </div>
    </Fragment>
  );
}

import Button from "react-bootstrap/Button";
import classes from "./SaveDiscard.module.css";
export default function SaveDiscard() {
    return (
        <div className={classes.btns}>
            <Button className={classes.btn} variant="success">
                SAVE CHANGES
            </Button>
            <Button className={classes.btn} variant="danger">
                DISCARD CHANGES
            </Button>
        </div>
    );
}

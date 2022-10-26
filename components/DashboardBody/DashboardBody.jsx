import classes from "./DashboardBody.module.css";
import Image from "next/image";

export default function DashboardBody() {
    return (
        <section>
            <div className={classes.body}>
                <Image
                    src="https://res.cloudinary.com/sarveshp46/image/upload/v1666795090/portfolio/homeimg_o1g1qk.jpg"
                    alt="home-image"
                />
            </div>
        </section>
    );
}

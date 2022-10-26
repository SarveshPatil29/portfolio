import classes from "./DashboardBody.module.css";
import homeimg from "../../public/images/homeimg.jpg";
import Image from "next/image";

export default function DashboardBody() {
  return (
    <section>
      <div className={classes.body}>
        <Image src={homeimg} alt="home-image" />
      </div>
    </section>
  );
}

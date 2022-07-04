import classes from "./Footer.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function Footer() {
    return (
        <section className={classes.footer}>
            <div className={classes.subFooter}>
                <Card className={classes.links}>
                    <Card.Body>
                        <Card.Title className={classes.title}>
                            QUICK LINKS
                        </Card.Title>
                        <nav className={classes.nav}>
                            <Card.Link className={classes.link} href="/view">
                                HOME
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                SKILLS
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                PROJECT
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                EXPERIENCE
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                ACHIEVEMENTS
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                CONTACT
                            </Card.Link>
                        </nav>
                    </Card.Body>
                </Card>
                <Card className={classes.links}>
                    <Card.Body>
                        <Card.Title className={classes.title}>
                            SOCIAL
                        </Card.Title>
                        <nav className={classes.nav}>
                            <Card.Link className={classes.link} href="/view">
                                LINKEDIN
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                GITHUB
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                TWITTER
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                INSTAGRAM
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                FACEBOOK
                            </Card.Link>
                        </nav>
                    </Card.Body>
                </Card>
            </div>
            <div className={classes.copyright}>
                <p>
                    <Link href="/">
                        <a
                            className={classes.homeLink}
                            // style={{
                            //     textDecoration: "inherit",
                            //     color: "inherit",
                            // }}
                        >
                            PORTFOLIO PRO
                        </a>
                    </Link>
                </p>
                <p>@2022 SAD CREATIONS ALL RIGHTS RESERVED</p>
                <p>BUILT USING NEXTJS</p>
            </div>
        </section>
    );
}

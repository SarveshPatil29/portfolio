import Link from "next/link";
import classes from "./Header.module.css";

function Header() {
    return (
        <nav>
            <h1>SARVESH PATIL</h1>
            <ul className={classes.navList}>
                <li>
                    <Link href="/view">HOME</Link>
                </li>
                <li>
                    <Link href="/view">SKILLS</Link>
                </li>
                <li>
                    <Link href="/view">PROJECTS</Link>
                </li>
                <li>
                    <Link href="/view">EXPERIENCE</Link>
                </li>
                <li>
                    <Link href="/view">ACHIEVEMENTS</Link>
                </li>
                <li>
                    <Link href="/view">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;

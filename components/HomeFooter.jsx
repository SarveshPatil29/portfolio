import React from "react";
import Link from "next/link";

const HomeFooter = () => {
    return (
        <div>
            <div className="fixed mt-0 bottom-0 left-0 z-20 p-2 w-full bg-zinc-900 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
                <span className="text-l text-white sm:text-center">
                    © 2022{" "}
                    <Link href="/">
                        <a className="hover:underline text-blue-400 no-underline hover:text-white cursor-pointer">
                            PORTFOLIO-PRO™
                        </a>
                    </Link>
                    . All Rights Reserved.
                </span>

                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
                    <li>
                        <a
                            href="#"
                            className="text-sm mr-4 hover:underline md:mr-6 text-white no-underline"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="mr-4 hover:underline md:mr-6 text-white no-underline"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="mr-4 hover:underline md:mr-6 text-white no-underline"
                        >
                            Licensing
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeFooter;

// import classes from "./Footer.module.css";
// import Card from "react-bootstrap/Card";
// import Link from "next/link";

// export default function Footer(props) {
//     const allHandles = props.data.handles;
//     const handlesList = allHandles.map((item) => (
//         <Card.Link key={item._id} className={classes.link} href="/view">
//             {item.name.toUpperCase()}
//         </Card.Link>
//     ));
//     return (
//         <section className={classes.footer}>
//             <div className={classes.subFooter}>
//                 <Card className={classes.links}>
//                     {/* <Card.Body>
//                         <Card.Title className={classes.title}>
//                             QUICK LINKS
//                         </Card.Title>
//                         <nav className={classes.nav}>
//                             <Card.Link className={classes.link} href="/view">
//                                 HOME
//                             </Card.Link>
//                             <Card.Link className={classes.link} href="/view">
//                                 SKILLS
//                             </Card.Link>
//                             <Card.Link className={classes.link} href="/view">
//                                 PROJECT
//                             </Card.Link>
//                             <Card.Link className={classes.link} href="/view">
//                                 EXPERIENCE
//                             </Card.Link>
//                             <Card.Link className={classes.link} href="/view">
//                                 ACHIEVEMENTS
//                             </Card.Link>
//                             <Card.Link className={classes.link} href="/view">
//                                 CONTACT
//                             </Card.Link>
//                         </nav>
//                     </Card.Body> */}
//                 </Card>
//                 <Card className={classes.links}>
//                     <Card.Body>
//                         <Card.Title className={classes.title}>
//                             SOCIAL
//                         </Card.Title>
//                         <nav className={classes.nav}>{handlesList}</nav>
//                     </Card.Body>
//                 </Card>
//             </div>
//             <div className={classes.copyright}>
//                 <p>
//                     <Link href="/dashboard">
//                         <a className={classes.homeLink}>PORTFOLIO PRO</a>
//                     </Link>
//                 </p>
//                 <p>@2022 UDAS CREATIONS ALL RIGHTS RESERVED</p>
//                 <p>BUILT USING NEXTJS</p>
//             </div>
//         </section>
//     );
// }

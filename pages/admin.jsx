import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard/UserCard";
import Layout from "../components/Layout";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import HomeFooter from "../components/HomeFooter";

import { getSession } from "next-auth/react";

const admin = (props) => {
    const allUsers = props.allUsers.map((user) => (
        <UserCard id={user._id} name={user.name} img={user.img} />
    ));
    return (
        <Layout>
            <HomeNavbar />
            {props.isAdmin && (
                <div className="flex flex-wrap mb-20">{allUsers}</div>
            )}
            {!props.isAdmin && (
                <div
                    class="text-center mt-4 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                >
                    <span class="font-medium">
                        YOU HAVE NOT BEEN ASSIGNED ADMIN ROLE. PLEASE CONTACT
                        THE DEVELOPER FOR MORE DETAILS
                    </span>
                </div>
            )}
            <HomeFooter />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    let allUsers = [];
    await axios.get("http://localhost:3000/api/allUsers").then((res) => {
        console.log(res.data);
        allUsers = res.data;
    });

    const session = await getSession(context);
    // let userId = null;
    let isAdmin = false;
    if (session) {
        await axios
            .get(
                `http://localhost:3000/api/user-email?email=${session.user.email}`
            )
            .then((res) => {
                // userId = res.data._id;
                if (res.data.isAdmin) {
                    isAdmin = res.data.isAdmin;
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }
    return {
        props: { allUsers, isAdmin }, // will be passed to the page component as props
    };
}

export default admin;

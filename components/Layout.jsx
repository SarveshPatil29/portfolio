import React, { FC } from "react";
import Head from "next/head";


const Layout = ({ title, content, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <link
                    rel="icon"
                    href="https://res.cloudinary.com/drr7rbizq/image/upload/v1664977190/logo-removebg-preview_1_jhx4kw.png"
                />
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-16ZG18G1H8"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-16ZG18G1H8');
            </script>
            </Head>

            <div className="">{children}</div>
            
        
        </>
    );
};

export default Layout;

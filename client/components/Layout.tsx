import Head from "next/head";
import Header from "./Header/Header";


interface Props {
    children: JSX.Element
    title: string,
}

const Layout = ({children, title}:Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} content={"Devir"}/>
                <meta name={"viewport"} content={"initial-scale=1.0, width=device-width"}/>
                <meta name={"keywords"} content={"Devir"}/>
            </Head>
            <Header/>
            {children}
        </>
    );
}

export default Layout;
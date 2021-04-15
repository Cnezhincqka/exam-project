import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head"

function Layout(props) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
                    integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
                    rel="stylesheet"
                />
                <title>Edu.by</title>
            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )
}
export default Layout
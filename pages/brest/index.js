import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import Unis from "../../components/Unis";

export default function Region({data}) {
    const {route} = useRouter()

    return (
        <>
            <Layout>
                <Unis data={data} region={route.replace("/", "")}/>
            </Layout>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/getUnis`, {
        method: "POST",
        body: JSON.stringify({
            region: "brest"
        })
    })
    const data = await res.json()
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {data}, // will be passed to the page component as props
    }
}
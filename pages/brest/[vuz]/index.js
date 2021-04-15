import Layout from "../../../components/Layout";
import styles from "../../../components/Cards.module.css";
import CardItem from "../../../components/CardItem";
import {useRouter} from "next/router";
import UniInfo from "../../../components/UniInfo";

export default function Vuz({data}) {
    return (
        <>
            <Layout>
                <UniInfo data={data}/>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/getUnis`, {
        method: "POST",
        body: JSON.stringify({
            region: "brest"
        })
    })
    const data = await res.json()
    const paths = data.map((v) => ({
        params: {vuz: v.id},
    }))
    return {paths, fallback: false}
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/getUniInfo`, {
        method: "POST",
        body: JSON.stringify({
            uni: context.params.vuz
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
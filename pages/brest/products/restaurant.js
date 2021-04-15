import Layout from "../../../components/Layout";

import React from "react"
import Map from "../../../components/Map";

export default function Products() {
    return (
        <Layout>
            <Map region={"Брест"} coords={[52.09755, 23.68775]} type={"ресторан"}/>
        </Layout>
    )
}

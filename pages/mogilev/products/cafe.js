import Layout from "../../../components/Layout";

import React from "react"
import Map from "../../../components/Map";

export default function Products() {
    return (
        <Layout>
            <Map region={"Могилёв"} coords={[53.894548, 30.330654]} type={"кафе"}/>
        </Layout>
    )
}

import Layout from "../../../components/Layout";

import React from "react"
import Map from "../../../components/Map";

export default function Products() {
    return (
        <Layout>
            <Map region={"Минск"} coords={[53.902284, 27.561831]} type={"парк"}/>
        </Layout>
    )
}

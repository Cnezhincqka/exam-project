import Layout from "../../../components/Layout";

import React from "react"
import Map from "../../../components/Map";

export default function Products() {
    return (
        <Layout>
            <Map region={"Гродно"} coords={[53.677834, 23.829529]} type={"парк"}/>
        </Layout>
    )
}

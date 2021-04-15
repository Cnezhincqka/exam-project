import Layout from "../../../components/Layout";

import React from "react"
import Map from "../../../components/Map";

export default function Products() {
    return (
        <Layout>
            <Map region={"Гомель"} coords={[52.424160, 31.014272]} type={"парк"}/>
        </Layout>
    )
}

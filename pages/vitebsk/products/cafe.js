import Layout from "../../../components/Layout";

import React from "react"
import Map from "../../../components/Map";

export default function Products() {
    return (
        <Layout>
            <Map region={"Витебск"} coords={[55.184217, 30.202869]} type={"кафе"}/>
        </Layout>
    )
}

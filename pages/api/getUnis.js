import db from "../../lib/db";
export default async function handler(req, res) {
    const connection = await db()
    const body = JSON.parse(req.body)
    const region = body.region
    let data
    switch (region) {
        case "brest":
            data = await connection.models.Region.findOne({name: "Брестская обл."}).lean()
            break
        case "vitebsk":
            data = await connection.models.Region.findOne({name: "Витебская обл."}).lean()
            break
        case "gomel":
            data = await connection.models.Region.findOne({name: "Гомельская обл."}).lean()
            break
        case "minsk":
            data = await connection.models.Region.findOne({name: "Минск"}).lean()
            data.ids.concat((await connection.models.Region.findOne({name: "Минская обл."}).lean()).ids)
            break
        case "grodno":
            data = await connection.models.Region.findOne({name: "Гродненская обл."}).lean()
            break
        case "mogilev":
            data = await connection.models.Region.findOne({name: "Могилевская обл."}).lean()
            break
    }
    const unis = (await connection.models.Vuz.find({id: data.ids}).lean())
        .map(uni => {
            return {
                id: uni.id,
                name: uni.name,
                type: uni.type
            }
        })
    res.status(200).send(
        JSON.stringify(unis)
    )
}
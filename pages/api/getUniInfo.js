import db from "../../lib/db";

export default async function handler(req, res) {
    const connection = await db()
    const body = JSON.parse(req.body)
    const uni = body.uni
    const data = await connection.models.Vuz.findOne({id: uni}).lean()
    data.specs = await connection.models.Speciality.find({id: data.specs}).lean()
    res.status(200).send(JSON.stringify(data))
}
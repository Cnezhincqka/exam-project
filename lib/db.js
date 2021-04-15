import mongoose from "mongoose";

const connection = {isConnected: false}; /* creating connection object*/
export default async function dbConnect() {
    if (!connection.isConnected) {
        if (!mongoose.models.Region) {
            require("../schemas/Region")
        }
        if (!mongoose.models.Vuz) {
            require("../schemas/Vuz")
        }
        if (!mongoose.models.Speciality) {
            require("../schemas/Speciality")
        }
        await mongoose.connect("mongodb+srv://zvshka:1234@database-a6uzs.mongodb.net/nongratha?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        connection.isConnected = mongoose.connections[0].readyState;
        console.log("-----db isConnected-----", mongoose.connections[0].models);
    }
    return mongoose.connection
}
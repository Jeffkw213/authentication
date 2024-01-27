import mongoose from "mongoose";

const Database = process.env.MONGODB_URI

const connectMongoDB = async () => {
    try {
        await mongoose.connect(Database!)
        console.log("connected")
    } catch (error) {
        console.log("not Connected")
    }
}

export default connectMongoDB;
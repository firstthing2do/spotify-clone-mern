import mongoose from "mongoose"

const connectDB = async() => {

    mongoose.connection.on('connected', () => {
        console.log("connection established")
    })
    await mongoose.connect(`${process.env.MONGODB_URl}/spotify`)
}

export default connectDB
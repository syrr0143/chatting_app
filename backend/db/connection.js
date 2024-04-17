import mongoose from 'mongoose';
const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('mongodb connected')
    } catch (error) {
        console.log('error connecting to mongodb')
        console.log(error)
    }
}

export { connectDb };
import mongoose from "mongoose";

// const connectTodb=async()=>{
//     try {
//         await mongoose.connect(process.env.MONGOURL)
//     } catch (error) {
//         console.log(error);
        
//     }
// }
const connectTodb = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectTodb;
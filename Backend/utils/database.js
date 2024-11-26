
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds timeout
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default databaseConnection;



// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config({
//     path:"../.env"
// })

// const databaseConnection = () => {
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         console.log("mongodb connected successfully");
//     }).catch((error)=>{
//         console.log(error);
//     })
// };
// export default databaseConnection;
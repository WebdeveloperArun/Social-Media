import express from 'express';
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";

// Load environment variables
dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("common"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,).then(() => {
    console.log("Database connected");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
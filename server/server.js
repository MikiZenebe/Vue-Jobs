import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";
import jobRoutes from "./routes/jobRoutes.js";

//Initial
const app = express();
dotenv.config();

//Middleware
app.use(express.json());

//Routes
app.use("/api/job", jobRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
//   });
// }

app.listen(5000, () => {
  console.log("Server is running");
  connectDB();
});

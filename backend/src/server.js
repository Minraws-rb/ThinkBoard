import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();
const app = express();

connectDB();
app.use("/api/notes", noteRoutes);

app.listen(5001, ()=> {
    console.log("Server started on  PORT: 5001");
});
//mongodb+srv://swarnimranabhat4_db_user:<db_password>@cluster0.hziflsv.mongodb.net/?appName=Cluster0
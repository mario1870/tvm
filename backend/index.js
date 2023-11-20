import express from "express"
import { PORT, mongoDB_URL } from "./config.js"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js"
import cors from "cors"

const app = express();

app.use(express.json())

app.use(cors());

app.get("/", (req, res) => {
    console.log("SALAM")
    return res.status(200).send("POGGERZZZ")
})

app.use("/books", booksRoute)

mongoose
    .connect(mongoDB_URL)
    .then(() => {
        console.log("App connected to database")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.error(err)
    })
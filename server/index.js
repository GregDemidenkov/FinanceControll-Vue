require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")

const corsMiddleware = require("./presentation/middleware/cors.middleware")
const transferRouter = require("./presentation/routes/transfer.routes")
const accountRouter = require("./presentation/routes/account.routes")

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

const app = express()

app
    .use(corsMiddleware)
    .use(express.json())
    .use("/api/transfer", transferRouter)
    .use("/api/account", accountRouter)


const start = async () => {
    try {
        await mongoose.connect(DB_URL)

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`)
        })
    } catch (error) {
        console.log("Server failed")
    }
}

start()
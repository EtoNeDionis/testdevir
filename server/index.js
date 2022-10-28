const express = require('express')
require('dotenv').config()
const { default: mongoose } = require('mongoose')
const router = require('./router/postRouter')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(express.json())
app.use('/posts', router)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.SECRET_USER}:${process.env.SECRET_PASSWORD}@cluster0.f3scush.mongodb.net/?retryWrites=true&w=majority`)
         app.listen(PORT, () => console.log(`Server started on ${PORT}`)) 
    } catch (error) {
        console.log(error);
    }
}

start()
const express= require("express")
const mongoose=require("mongoose")
const mongodb=require("mongodb")
const routes= require('./routes/ToDoRoute')
const app= express();
const cors= require("cors")

require("dotenv").config()
const PORT=process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{console.log(`connected to mongodb`)})
.catch((err)=>{console.log(err)})

app.use(routes)

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})

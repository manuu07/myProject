const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/product')
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("MongoDB is connected")})
.catch(err=>console.log(err))

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/v1',route)

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})
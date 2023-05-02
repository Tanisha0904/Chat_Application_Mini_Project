const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept json data
app.get('/', (req, res) => {
    res.send("API is running");

});

app.use('/api/user', userRoutes);

//middleware/errorMiddleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`server is running on port ${PORT}`.yellow.bold));
   
 

require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const { PORT, MONGO_URL } = process.env;
app.use(cors({
    origin: '*'
}))

mongoose.connect(MONGO_URL);

const post_route = require('./routes/postRoutes');

app.use('/api', post_route);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT || 4321}`);
})
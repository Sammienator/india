const express = require('express');
const router = require('./routes/event-routes.js')

const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

app.use("/events", router )



 


mongoose.connect("mongodb+srv://sammienator:sammienatorpassword@cluster0.sjhbdhu.mongodb.net/?retryWrites=true&w=majority"

).then(() => console.log("Connected to Database")).then(()=>{
    app.listen(5000);
}).catch((err) => console.log(err));

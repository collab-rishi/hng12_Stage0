const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {

    const email = "kumarrishi9862@gmail.com";
    let currentDateTime = new Date().toISOString();
    console.log(currentDateTime);

    res.status(200).json({
        email: email,
        current_datetime: currentDateTime,

    });

});

module.exports=app;

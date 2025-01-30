const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    const email = "kumarrishi9862@gmail.com";
    let currentDateTime = new Date().toISOString();
    console.log(currentDateTime);
    const githubUrl = "https://github.com/collab-rishi/hng12_Stage0"

    res.status(200).json({
        email: email,
        current_datetime: currentDateTime,
        github_url: githubUrl
    });

});
app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});

module.exports=app;

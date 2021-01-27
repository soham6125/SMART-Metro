const express = require("express"),
    bodyParser = require("body-parser"),
    dotenv = require("dotenv"),
    app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "DEV";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    //TODO: Render a Landing Page
    res.send("landing page go to /home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/map", (req, res) => {
    //TODO: Render a Map
    res.send("map");
});

app.get("/about", (req, res) => {
    //TODO: Render About Us
    res.send("about");
});

app.post("/findpath", async (req, res) => {
    try {
        const { start, end } = req.body;
        //TODO: Spawn Python script
        const result = { start, end };

        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({
            message: "Oops Something went wrong!",
            err,
        });
    }
});

app.listen(PORT, function () {
    console.log(`Running on http://locahost:${PORT} in ${NODE_ENV} env`);
});

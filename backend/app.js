const express = require("express");
const cors = require("cors");
require("dotenv").config();

console.log("App Started");

require("./config/db");

console.log("Before Routes");

const studentRoutes = require("./routes/studentRoutes");

console.log("After Routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
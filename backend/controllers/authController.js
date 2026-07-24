const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/db");


// Register API
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    db.query(sql, [username, email, hashedPassword], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "User registered successfully"
        });
    });
};


// Login API
const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }


        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }


        const isMatch = await bcrypt.compare(
            password,
            result[0].password
        );


        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }


        const token = jwt.sign(
            {
                id: result[0].id,
                email: result[0].email
            },
            "mySecretKey",
            {
                expiresIn: "1h"
            }
        );


        res.json({
            message: "Login successful",
            token: token
        });

    });
};


module.exports = {
    registerUser,
    loginUser
};
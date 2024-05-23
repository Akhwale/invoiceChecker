const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { createWorker } = require("tesseract.js");

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());

const PORT = 5000;


app.get('/', (req,res) => {
    res.send("Hello world")
});


app.get('/upload', (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
      console.log("no vile man");
    }

    // Check if uploaded file is a PDF
    if (req.file.mimetype !== 'application/pdf') {
        return res.status(400).send('Only PDF files are allowed');
    }

        }
);

app.listen(PORT, () => console.log(`you are listening to port ${PORT}`));

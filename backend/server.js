const express = require("express");
const cors = require("cors");
const multer = require("multer");


const upload = multer({ 
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
      if (file.mimetype !== 'application/pdf') {
        req.fileInvalidError = 'Only PDF files are allowed';
        return cb(null, false);
      }
      cb(null, true);
    }
});


const app = express();
app.use(cors());

const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("No file uploaded");
        return res.status(400).send('No file uploaded');
    }

    // Check if uploaded file is a PDF
    if (req.file.mimetype !== 'application/pdf') {
        console.log("Only PDF files are allowed");
        return res.status(400).send('Only PDF files are allowed');
    }

    // If you want to process the file with Tesseract.js or any other processing, add that logic here

    // Send a successful response
    res.send('File uploaded successfully');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

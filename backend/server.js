const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve frontend build
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Setup Multer
const upload = multer({ dest: 'uploads/' });

// Upload Endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully', filename: req.file.originalname });
});

// List Uploaded Files
app.get('/files', (req, res) => {
    const files = fs.readdirSync(path.join(__dirname, 'uploads'));
    res.json(files);
});

// Download File
app.get('/download/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.filename);
    res.download(filePath);
});

// Fallback to frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

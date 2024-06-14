const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // For creating directory if it doesn't exist

const app = express();
const PORT = process.env.PORT || 8080;

// Adjust this path to a dedicated folder OUTSIDE the source code directory
const uploadDir = path.join(__dirname, "public/uploads");

// Create the upload directory if it doesn't exist (with error handling)
if (!fs.existsSync(uploadDir)) {
  try {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log("Upload directory created:", uploadDir);
  } catch (error) {
    console.error("Error creating upload directory:", error);
    process.exit(1); // Exit the server process on error
  }
}

// Set up multer storage with a secure random filename generation
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Set the destination folder
  },
  filename: function (req, file, cb) {
    const randomFilename =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15) +
      path.extname(file.originalname);
    cb(null, randomFilename); // Generate unique filename
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
}); // Limit file size to 10MB

// Endpoint to handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    console.log(
      `File uploaded successfully: ${uploadDir}/${req.file.filename}`
    );
    // You can do additional processing here (e.g., database storage)
    return res.status(200).send({ message: "File uploaded successfully." });
  } else {
    return res.status(400).send("No file uploaded.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
s;

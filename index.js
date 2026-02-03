const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Static files (images) ko serve karne ke liye
app.use(express.static(__dirname));

// "/" route par root ki html file serve
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "email-template.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

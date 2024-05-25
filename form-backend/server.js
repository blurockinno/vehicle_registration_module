const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const FormData = require('./model/FormData'); // Ensure this path is correct
const db = require('./config/dataBase'); // Import the DB connection module

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
db.connect();

// Route to handle form data submission
app.post('/api/formdata', (req, res) => {
  const newFormData = new FormData(req.body);

  // Compare current date with validityUpto date
  const currentDate = new Date();
  const validityDate = new Date(req.body.validityUpto);

  if (validityDate < currentDate) {
    return res.status(400).json('Error: validityUpto date is in the past.');
  }

  newFormData.save()
    .then(() => res.status(200).json('Form data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

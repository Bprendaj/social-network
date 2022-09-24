// Require express and mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

// Connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  mongoose.set('debug', true);

  const conSuccessful = mongoose.connection
  conSuccessful.once('open', () => {
    app.listen(PORT, () => console.log(`connected on localhost:${PORT}`));
  })
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hamad:hamad@cluster0.6zetdcs.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

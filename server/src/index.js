const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://127.0.0.1:27017/mern-testing', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log(err));

const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json()); // we no longer need body-parser in 2019, because it's already included in express

/**********************
 * CONNECT TO MONGODB *
 **********************/

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection successful');
});

/**************************
 * REQUIRE AND USE ROUTES *
 **************************/
const postsRouter = require('./routes/posts');

app.use('/posts', postsRouter);

/*****************
 * SERVER LISTEN *
 *****************/

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
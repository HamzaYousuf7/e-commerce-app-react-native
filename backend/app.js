const express = require('express');
const bodyParser = require('body-parser');

// local imp

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const notFoundRoutes = require('./routes/notFoundRoutes');

// ap start
const app = express();

// parsing the incoming req
app.use(bodyParser.json());

// handling CROS error
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT',
  );

  next();
});

//routes handle
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use(notFoundRoutes);

// error handling
app.use((error, req, res, next) => {
  res.status(500).json({message: 'something went wrong'});
});

// listening
app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

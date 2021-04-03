const express = require('express');
const bodyParser = require('body-parser');

// local imp
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const notFoundRoutes = require('./routes/notFoundRoutes');
// ap start
const app = express();

//routes handle
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use(notFoundRoutes);
// parsing the incoming req
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

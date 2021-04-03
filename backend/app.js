const express = require('express');

// local imp

// ap start

const app = express();



app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

const express = require('express');
const app = express();
 
 
// const article = require('./routes/article');

// app.use(article);

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on ${port}`))
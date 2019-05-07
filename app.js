const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000
const path = require('path')

 
const routes = {
  article: require('./routes/article')
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(cors())
app.use('/article', routes.article);


app.listen(PORT, () => console.log(`listening on ${PORT}`))
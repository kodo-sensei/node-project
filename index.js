const express = require('express');
const app = express();
const port = 3000
const db = require('./models');
var bodyParser = require('body-parser')

app.use(bodyParser.json())
require('./controllers/asset.controller')(app);
require('./controllers/book.controller')(app);


db.mongoose.connect(
    db.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected to the database!");
})
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
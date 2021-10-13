const express = require('express');
const loadDabase = require('./config/database-config');
const cookieParse = require('cookie-parser')

const app = express();

app.use(express.urlencoded({extended:true}))

app.use(cookieParse());

require('./config/handlebars-config')(app);

loadDabase()    
    .then(() => app.listen(3000, () => console.log('The server is running...')))
    .catch((err) => console.log(err))
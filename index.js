const express = require('express');
const loadDabase = require('./config/database-config');
const cookieParse = require('cookie-parser');
const router = require('./router');
const auth = require('./middlewares/auth-middleware');

const app = express();

app.use(express.urlencoded({ extended: true }))


app.use(cookieParse());

app.use(express.static('./static'))

app.use(auth)

require('./config/handlebars-config')(app);

app.use(router)

loadDabase()
    .then(() => app.listen(3000, () => console.log('The server is running...')))
    .catch((err) => console.log(err))
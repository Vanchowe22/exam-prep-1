const express = require('express');

const loadDabase = require('./config/database-config');
const router = require('./router');

const app = express();

require('./config/express-config')(app);
require('./config/handlebars-config')(app);

app.use(router)

loadDabase()
    .then(() => app.listen(3000, () => console.log('The server is running...')))
    .catch((err) => console.log(err))
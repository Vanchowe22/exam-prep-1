const handlebars = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        extname:'hbs',
        allowedProtoMethods: {
            trim: true
          }      
    }))

    app.set('view engine', 'hbs');
}
/* Handlebars template */
const exphbs = require('express-handlebars');
const express = require('express');
const routes = require('./controller/');
const sequelize = require('./config/connection');
/* Linking the stylesheet */
const path = require('path');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;
// for express-sessions library - store user cookies
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Linking the style sheet //
app.use(express.static(path.join(__dirname, 'public')));

//Front end code ( )
app.use(express.static('public'));
// to turn on routes for DB -back end
app.use(routes);

//setup routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  
// Start the server on the port
// to turn on connection to DB and server - back end for sequelize part
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
});


const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();
console.log("Ben non je vais pas afficher le secret c'est secret !");

// Moteur de template
const exphbs = require('express-handlebars');
app.set("views", "./views");
app.set("view engine", ".hbs");
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));

const models = require('./models');
models.sequelize.sync().then(() => {
    console.log('[+] Database is connected');
}
).catch((err) => {
    console.log('[-] Error: ', err);
});

app.use(session({secret:process.env.SECRET, resave:true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport/passport.js")(passport, models.user);

app.listen(3000, () => {
    console.log('\n[+] Server is running on port 3000 at http://localhost:3000\n');
});


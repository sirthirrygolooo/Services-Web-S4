const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.SECRET);

// Moteur de template
const exphbs = require('express-handlebars');
app.set("views", "./views");
app.set("view engine", ".hbs");
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));

app.listen(3000, () => {
    console.log('Server is running on port 3000 at http://localhost:3000');
});


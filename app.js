const express = require('express')
const expressHbs = require('express-handlebars')

const app = express();

const hbs = expressHbs.create({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: "views/layout"
})

//setting view engine
app.set('view engine', 'hbs');

app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))

const home = require('./routes/index');
//routing
app.use('/', home);

const port = 4444;

app.listen(port, () =>{
    console.log(`running at http://localhost:${port}`);

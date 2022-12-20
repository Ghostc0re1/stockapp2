const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//set handlebars
app.get('/', (req, res) => {
        res.render('home', {
            stuff: "this is Stuff"
    });
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//log output to console
app.listen(PORT, () => console.log('listening on port ' + PORT));

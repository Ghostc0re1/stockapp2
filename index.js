//stock market portfolio app by Taylor Berardelli

const request = require('request');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;
//call api
function call_api(finishedAPI){
    request('https://api.iex.cloud/v1/data/core/quote/aapl?token=pk_59727eca654d475bb7df57f100dcdf58', { json: true }, (err, res, body) => {
    if(err) {return console.log(err);}
    if(res.statusCode === 200) {
        finishedAPI(body);   
        };
    });
};

//set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//set handlebars routes
app.get('/', function(req, res) {
    call_api(function(doneAPI) {
        res.render('home', {
            stock: doneAPI
        });
    });
});

//create about page
app.get('/info.html', (req, res) => {
    res.render('info')
});

//create home page
app.get('/main.html', (req, res) => {
    res.render('home')
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//log output to console
app.listen(PORT, () => console.log('listening on port ' + PORT));

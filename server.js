const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerHelper('currentYear', function () {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', function (text) {
    return text.toUpperCase();
});

app.get('/', function (request, response) {
    var pageProperties = {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to the website',
    };
    response.render('home.hbs', pageProperties);
});

app.get('/about', function (request, response) {
    var pageProperties = {
        pageTitle: 'About Page',
    };
    response.render('about.hbs', pageProperties);
});

app.listen(port, function () {
    console.log(`Server starting at port ${port}`);
});
//modulos externos
const express = require('express');
const pug = require('pug');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// views
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));


app.get('/',  (req, res) => {
    res.render("home.pug")
    
});


app.post('/', async (req, res) => {
    let filmUser = req.params.filmUser;
    console.log(filmUser)
    if (filmUser) {
        try {
            let response = await fetch(`http://www.omdbapi.com/?t=${filmUser}&apikey=8a93067f`); //{}
            let films = await response.json(); //{}
            console.log("funciona?")
            res.redirect('film.pug'); // Pinta datos en el pug 
        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    }
});






// fd842bea https://www.omdbapi.com/?s=((PALABRA))&apikey=fd842bea
// 8a93067f

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
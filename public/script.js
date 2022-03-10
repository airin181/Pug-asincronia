/* //modulos externos
const express = require('express');
const fetch = require('node-fetch');

const app = express();


 */
/* let filmUser = document.getElementById("input").value; */
/* submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona")

    let filmUser = document.getElementById("input").value;
    console.log(filmUser); */

    /* app.get('/', (req, res) => {

        res.redirect("/film/:filmUser");

    }); */
    
/* 
async function scriptApp (filmUser) {
    app.get("/film/:filmUser", async (req, res) => {

        if (req.params.filmUser) {
            try {
                let response = await fetch(`http://www.omdbapi.com/?t=${req.params.filmUser}&apikey=8a93067f`); //{}
                let films = await response.json(); //{}
                res.redirect('film', {
                    "films": [films]
                }); // Pinta datos en el pug
            } catch (error) {
                console.log(`ERROR: ${error.stack}`);
            }
        } else {
            /* try {
                let response = await fetch(`https://fakestoreapi.com/products`); // []
                let products = await response.json(); // []
                res.render('products', {
                    products
                }); // Pinta datos en el pug
            } catch (error) {
                console.log(`ERROR: ${error.stack}`);
            } 
        }
    })
} */
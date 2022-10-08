import View from './View.js';
import Client from './Client.js';

// All of your javascript should go here

const input = document.querySelector("input");

const newClient = new Client();
const newView = new View();






input.addEventListener("change", async () => {
    if(input.value) {
    const data = await newClient.getMovieData(input.value);
    console.log(data);

    newView.displayMovieOnPage(data);
    }
})
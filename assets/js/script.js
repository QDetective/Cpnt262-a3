// fetching data from thecocktaildb api

fetch('https://www.thecocktaildb.com/api/json/v1/random.php')
    .then(function(response) {

        // JSON that is returned from the server will be converted to JS object asynchronously.
        if (!response.ok) {
            throw new Error('Not 200 OK');
        }
        return response.json();
    })
    .then(function(data) {
        // applying my selectors to the items in html
        const cocktail = document.querySelector(".cocktails")
        const button = document.querySelector(".cocktailbtn")
            //function for random drink
        const randomdrink = function() {
            //creating a random number
            let drink = Math.floor(Math.random() * 100)
            cocktail.innerHTML = `
    <img src="${data[randomdrink].strDrinkThumb}" alt="${data[randomdrink].strDrink}" weight="300" height="450">
    <h3>Cocktail: ${data[randomdrink].StrDrink}</h3>
    <h4>Instructions: ${data[randomdrink].strInstruction}</h4>
    `
        }
        randomdrink()
            //add a click listener to the bottom to produce the next random movie
        button.addEventListener('click', randomdrink)
    })
    .catch(function(err) {
        // An error or `reject` from any of the above `.then()` blocks will end up here.
        cocktails.innerHTML = `
    <h1>ERROR! ERROR!</h1>
    <img src="https://images.pexels.com/photos/6858621/pexels-photo-6858621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="300">
    <h2>There seems to be a problem, try clicking on the button again.</h2>
    `
        console.log(err);
    });
}

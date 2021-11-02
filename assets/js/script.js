const cocktail = document.querySelector(".cocktails")
const button = document.querySelector(".cocktailbtn")
// fetching data from thecocktaildb api

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Not 200 OK');
        }
        return response.json();
    })
    .then(function(data) {
        const randomdrink = function() {
            let drink = Math.floor(Math.random() * 100)
            cocktail.innerHTML = `
    <img src="${[drink].strDrinkThumb}" alt="${[drink].strDrink}" weight="300" height="450">
    <h3>Cocktail: ${[drink].0.StrDrink}</h3>
    <h4>Instructions: ${[drink].0.strInstruction}</h4>
    `
        }
        randomdrink()
            //add a click listener to the bottom to produce the next random movie
        button.addEventListener('click', randomdrink)
    })
    .catch(function(err) {
        cocktail.innerHTML = `
    <h1>ERROR! ERROR!</h1>
    <img src="https://images.pexels.com/photos/6858621/pexels-photo-6858621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="300">
    <h2>There seems to be a problem, try clicking on the button again.</h2>
    `
        console.log(err);
    });
}

"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-12"><div class = "card">' + coffee.image + '<div class = "card-body">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4 class = "card-title">' + coffee.name + '</h4>';
    html += '<h6 class = "card-title">' + coffee.roast + '</h6>';
    html += '<p class = "card-text">' + coffee.description + '</p>';
    html += ' <a href="#" class="btn btn-light">Order Now!</a>'
    html += '</div></div></div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "All Roasts"){
            filteredCoffees.push(coffee)
        }
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesNew() {
    var selectedCoffee = input.value.toUpperCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase() === selectedCoffee) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesKey() {
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var selectedCoffee = input.value.toLowerCase();
        var lower = coffee.name.toLowerCase();
        var coffeeArray = lower.split("")
        var newCoffeeArr = [];
        for ( var j = 0; j < selectedCoffee.length; j++){
            newCoffeeArr.push(coffeeArray[j])
            var coffeeStr = newCoffeeArr.join("")
            if (coffeeStr === selectedCoffee){
                filteredCoffees.push(coffee)
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffees() {
    var newCoffee = {};
    var coffeeName = userCoffee.value;
    var nameArr = coffeeName.split("");
    nameArr[0] = nameArr[0].toUpperCase();
    var newName = nameArr.join("");
    newCoffee.name = newName;
    newCoffee.roast = userRoast.value;
    newCoffee.id =coffees.length+1;
    coffees.push(newCoffee)
    tbody.innerHTML = renderCoffees(coffees);
}

// document.getElementById("add").onclick  = function() {
//
//     var node = document.createElement("Li");
//     var text = document.getElementById("user-input").value;
//     var textnode = document.createTextNode(text);
//     node.appendChild(textnode);
//     document.getElementById("list").appendChild(node);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {   id: 1,
        name: 'Light City',
        roast: 'medium',
        image: "<img src=\"img/light-city.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "It has a medium brown colour and is just a little oily on the surface. It is used in everyday coffee to bring a richer and sweeter taste to your coffee that you will remember."
    },
    {   id: 2,
        name: 'Half City',
        roast: 'light', image: "<img src=\"img/half-city.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "It has a fully developed flavor and body, but little caramelization to add sweetness to the cup."
    },
    {   id: 3,
        name: 'Cinnamon',
        roast: 'light',
        image: "<img src=\"img/cinnamon.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "In this roast, the beans barely enter first crack, resulting in a relatively dry bean with a light brown color.Coffee brewed from a cinnamon roast often has a sour taste, regardless of origin. "
    },
    {   id: 4,
        name: 'City',
        roast: 'medium',
        image: "<img src=\"img/city.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: ""
    },
    {   id: 5,
        name: 'American',
        roast: 'medium',
        image: "<img src=\"img/american.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: ""
    },
    {   id: 6,
        name: 'Breakfast',
        roast: 'medium',
        image: "<img src=\"img/breakfast.jpg\" class=\"card-img-top\" alt=\"...\">",
        description: ""
    },
    {   id: 7,
        name: 'High',
        roast: 'dark',
        image: "<img src=\"img/high.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: ""
    },
    {   id: 8,
        name: 'Continental',
        roast: 'dark',
        image: "<img src=\"img/continental.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: ""
    },
    {   id: 9,
        name: 'New Orleans',
        roast: 'dark',
        image: "<img src=\"img/new-orleans.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: ""
    },
    {   id: 10,
        name: 'European',
        roast: 'dark',
        image: "<img src=\"img/\" class=\"card-img-top\" alt=\"...\">",
        description: ""
    },
    {   id: 11,
        name: 'Espresso',
        roast: 'dark',
        image: "<img src=\"img/espresso.jpg\" class=\"card-img-top\" alt=\"...\">",
        description: "Espresso has all of the same flavors of coffee but amplified—bitter, lightly sweet, acidic, toasty."
    },
    {   id: 12,
        name: 'Viennese',
        roast: 'dark',
        image: "<img src=\"img/\" class=\"card-img-top\" alt=\"...\">",
        description: "Characterized by a slightly deeper color than American Roast, with small spots of oil on the bean's surface."
    },
    {   id: 13,
        name: 'Italian',
        roast: 'dark',
        image: "<img src=\"img/italian.jpg\" class=\"card-img-top\" alt=\"...\">",
        description: "In this roast, the beans pass second crack. Italian roasted beans have a dark color and a shiny surface from its oils."
    },
    {   id: 14,
        name: 'French',
        roast: 'dark',
        image: "<img src=\"img/french_roast.jpg\" class=\"card-img-top\" alt=\"...\">",
        description: "In this roast, the beans are well into the second crack. French roasted beans will have a dark brown color and a shiny surface from its oils."
    },
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#roast-selection');
var roastSelection = document.querySelector('#roast-selection');
var input = document.querySelector('#user_coffee');
var inputButton = document.querySelector('#search');
var addToList = document.querySelector( "#add")
var userCoffee = document.querySelector('#user_create')
var userRoast = document.querySelector('#roast-creation')

tbody.innerHTML = renderCoffees(coffees);

inputButton.addEventListener('click', updateCoffeesNew)
submitButton.addEventListener('input', updateCoffees);
input.addEventListener('input', updateCoffeesKey)
addToList.addEventListener('click', addCoffees)



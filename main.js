"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-12 col-md-6 col-xl-4"><div class = "card">' + coffee.image + '<div class = "card-body">';
    html += '<h4 class = "card-title">' + coffee.name + '</h4>';
    html += '<h6 class = "card-title">' + coffee.roast + '</h6>';
    html += '<p class = "card-text">' + coffee.description + '</p>';
    html += "<a href='#' class='btn btn-light'>Order Now</a>"
    html += '</div></div></div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
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
    if(input.value === ''){
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

function addCoffees() {
    var newCoffee = {};
    var coffeeName = userCoffee.value;
    var nameArr = coffeeName.split("");
    nameArr[0] = nameArr[0].toUpperCase();
    var newName = nameArr.join("");
    newCoffee.name = newName;
    if(userRoast.value === '--Select Roast Type--'){
        newCoffee.roast = 'Roast Not Specified'
    }else {
        newCoffee.roast = userRoast.value;
    }
    newCoffee.image = "<img src='img/user-coffee.jpeg'>"
    newCoffee.description = lorem
    newCoffee.id = coffees.length + 1;
    coffees.push(newCoffee)
    localStorage.setItem('newCoffees', JSON.stringify(coffees))
    tbody.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {   id: 1,
        name: 'Light City',
        roast: 'light',
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
        image: "<img src=\"img/city2.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "Brewed from beans roasted to this degree will present the full flavor present in the beans without having its characteristics masked by the roast. A city roast will tend to highlight bright, acidic notes."
    },
    {   id: 5,
        name: 'American',
        roast: 'medium',
        image: "<img src=\"img/american.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "American Roast is the traditional roasting style of American coffee. It produces a flavorful, complex cup of coffee."
    },
    {   id: 6,
        name: 'Breakfast',
        roast: 'medium',
        image: "<img src=\"img/breakfast.jpg\" class=\"card-img-top\" alt=\"...\">",
        description: " Breakfast blends are light-to-medium roasts with bright acidity and smoothly balanced flavors. They are specially blended to a flavor profile that most people enjoy in the morning."
    },
    {   id: 7,
        name: 'High',
        roast: 'dark',
        image: "<img src=\"img/high.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "High Roast Coffee Beans are roasted in the traditional way. The Italian style is to roast until the beans turn black and oils are produced, giving this coffee a lovely bitter edge"
    },
    {   id: 8,
        name: 'Continental',
        roast: 'dark',
        image: "<img src=\"img/continental.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "Dark-roasted coffee beans producing coffee with a Continental flavour, or the coffee itself."
    },
    {   id: 9,
        name: 'New Orleans',
        roast: 'dark',
        image: "<img src=\"img/new-orleans.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "Flavors of Vanilla Ice Cream, Brown Sugar and Rum, Ripe Banana with a hint of Cinnamon."
    },
    {   id: 10,
        name: 'European',
        roast: 'dark',
        image: "<img src=\"img/european.jpeg\" class=\"card-img-top\" alt=\"...\">",
        description: "European espresso, tends to be a dense, bittersweet brew with ample crema, intense and distinctive flavor profiles, and a persistent aftertaste."
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
        image: "<img src=\"img/viennese.jpeg\" class=\"card-img-top\" alt=\"...\">",
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
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum suscipit tempora!'
var newCoffees = localStorage.getItem('newCoffees');
newCoffees = JSON.parse(newCoffees);

if(newCoffees === null) {
    tbody.innerHTML = renderCoffees(coffees);
} else {
    tbody.innerHTML = renderCoffees(newCoffees);
}

inputButton.addEventListener('click', updateCoffeesNew)
submitButton.addEventListener('input', updateCoffees);
input.addEventListener('input', updateCoffeesKey)
addToList.addEventListener('click', addCoffees)







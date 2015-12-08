var name;

function getName(); {
    name = prompt("Please enter a user name to call you by.")
);
if (isNaN(name)) {
    alert("Please enter a user name to continue to the site!");
    getName();
}
}

function sayName() {
    el.textContent = 'Hello ' + name + ' You found my website! This site will contain lots of things that i have created through out the years. This includes games.';
}

var el = document.getElementById('name');
getName();
sayName();
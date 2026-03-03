
let quotes = [
    { text: "Believe in yourself.", author: "Aliya" },
    { text: "Study hard.", author: "Fatema" },
    { text: "Do good things.", author: "Sara" },
    { text: "Stay positive.", author: "Ahmed" },
    { text: "You are a good person.", author: "Yahia" }
];


let newqutes = document.getElementById("quote");
let authorname = document.getElementById("author");
let button = document.getElementById("button");


button.addEventListener("click", function () {

    let random = Math.floor(Math.random() * quotes.length);

    newqutes.innerHTML = `${quotes[random].text}`;
    authorname.innerHTML = `${quotes[random].author} `;


});

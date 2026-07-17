const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");

const hero = document.getElementById("hero");
const story = document.getElementById("story");
const final = document.getElementById("final");


startButton.onclick = function() {

    hero.style.display = "none";

    story.style.display = "flex";

};


nextButton.onclick = function() {

    story.style.display = "none";

    final.style.display = "flex";

};

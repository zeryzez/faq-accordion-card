var buttons = document.querySelectorAll(".boutton");
var answers = document.querySelectorAll(".answer");
var arrows = document.querySelectorAll(".arrow");

buttons.forEach((button, index) => {
  button.addEventListener("click", event => {
    if (answers[index].style.display === "block") {
      answers[index].style.display = "none";
      arrows[index].style.transform = "rotate(0deg)";
      button.style.fontWeight = "lighter";
    } else {
      answers[index].style.display = "block";
      arrows[index].style.transform = "rotate(180deg)";
      button.style.fontWeight = "bold";
    }
  });
});


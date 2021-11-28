let numberOfButtons = document.querySelectorAll(".quest-box").length;

for(let i=0; i<numberOfButtons; i++){
  document.querySelectorAll(".quest-box")[i].addEventListener("click", function (){

  document.querySelectorAll(".answer")[i].classList.toggle("answer-visible");
  document.querySelectorAll(".quest")[i].classList.toggle("quest-bold");
  document.querySelectorAll(".btn-img")[i].classList.toggle("rotated");
  });
}

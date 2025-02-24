let button2 = document.getElementsByClassName("faq_b2")[0];
let button = document.getElementsByClassName("faq_b1")[0];
let elements = document.getElementsByClassName("main_q");

let elements2 = document.getElementsByClassName("main_q2");
function display() {
  button.style.backgroundColor = "green";
  button.style.color = "white";
  button2.style.backgroundColor = "";
  button2.style.color = "";

  for (let i = 0; i < elements2.length; i++) {
    if (elements2[i]) elements2[i].style.display = "none";
  }
  for (let i = 0; i < elements.length; i++) {
    if (elements[i]) elements[i].style.display = "flex";
  }
}
function display2() {
  button2.style.backgroundColor = "green";
  button2.style.color = "white";
  button.style.backgroundColor = "";
  button.style.color = "";
  for (let i = 0; i < elements.length; i++) {
    if (elements[i]) elements[i].style.display = "none";
  }
  for (let i = 0; i < elements2.length; i++) {
    if (elements2[i]) elements2[i].style.display = "flex";
  }
}

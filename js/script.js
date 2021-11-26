const modal = document.querySelectorAll("ty-modal");
const formBtn = document.querySelectorAll("sendform");
const span = document.querySelector(".closeBtn");

console.log(modal, formBtn, span);

formBtn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function() {
    modal.style.display = "none";
}

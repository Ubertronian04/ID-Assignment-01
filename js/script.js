const modal = document.querySelector("#ty-modal");
const formBtn = document.querySelector("#sendform");
const span = document.querySelector("#btn");

let modalDisplay = modal.style.display;

formBtn.submit = function () {
    e = function() {modal.style.display = "block";}
    document.addEventListener("submit", e);
}
span.onclick = function () {
    modalDisplay = "none";
    location.reload();
}

formBtn.submit();



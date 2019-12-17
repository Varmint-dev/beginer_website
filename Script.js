let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let c_btn = document.getElementById('Btn');

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}

c_btn.onclick = function() {
    modal.style.display = "none";
}
}


let modal2 = document.getElementById('myModal2');
let btn2 = document.getElementById("myBtn2");
let c_btn2 = document.getElementById('Btn2');

btn2.onclick = function() {
    modal2.style.display = "block";
}

window.onclick = function(event) {
if (event.target == modal2) {
    modal2.style.display = "none";
}

c_btn.onclick = function() {
    modal2.style.display = "none";
}

const btn = document.getElementById("downloadBtn");
const popup = document.getElementById("popup");
const close = document.querySelector(".close");

btn.onclick = function () {
  popup.style.display = "block";
};

close.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
};

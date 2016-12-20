var count = document.getElementById("clickCount");
var box = document.getElementById("myBox");

box.addEventListener("click", function(){
    count.innerHTML = parseInt(count.innerHTML) + 1;
});
var counter = (function() {

    var box = document.getElementById("myBox"),
        count = document.getElementById("clickCount");

    function incrementCounter() {
        count.innerHTML = parseInt(count.innerHTML) + 1;
    }

    box.addEventListener("click", incrementCounter);
})();


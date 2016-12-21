var resetCounter = (function() {

	var count = document.getElementById("clickCount");

	function resetCounter() {
		count.innerHTML = 0;
	};

	setInterval(function() {
		resetCounter();
	}, 30000);
})();





function resetCounter(){
	document.getElementById("clickCount").innerHTML = 0;
};

setInterval(function(){
	resetCounter()
}, 30000);


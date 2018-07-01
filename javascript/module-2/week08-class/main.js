(function(){
	let count=0;
	document.getElementById("count").innerHTML= count;

	function countInc(){
		count++;
		document.getElementById("count").innerHTML= count;
		
	}
	function countWait(){
		setTimeout(function(){
			console.log(count)
		}, 3000);
	}
	document.getElementById("btn-count").addEventListener("click",countInc);

	document.getElementById("btn-wait").addEventListener("click",countWait);
})();
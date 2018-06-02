$(document).ready(function(){
	$("button").click(function(){
		$.get("https://api.etherscan.io/api?module=account&action=balance&address=0xb215cfebb90d91b1d2f499843800d3105b1366fc&tag=latest&apikey=9R1SBAHHRX5138FBZWPWP9W8JRFRFV73AJ", function(data, status){
//			alert("Ethereum Balance: " + data.result);
	        document.getElementById("address1").innerHTML = data.result;
	   	});
	});
});

/* CSS Pie Chart Code by Sean @ http://www.ohsean.net */
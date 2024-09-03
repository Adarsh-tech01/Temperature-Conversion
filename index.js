const tempertaure = document.getElementById("tempertaure");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const printResult = document.getElementById("printResult");

let temp;

function convert(){

	if(toFahrenheit.checked){
		temp = Number(tempertaure.value);
		temp = ((temp*9)/5)+32
		printResult.textContent= temp.toFixed(1) + "F";
	}
	else if(toCelcius.checked){
		temp = Number(tempertaure.value);
		temp = (temp- 32)*(5/9);
		printResult.textContent= temp.toFixed(1) + "C";
	}
	else{
		printResult.textContent = "Select a Unit"
	}
}
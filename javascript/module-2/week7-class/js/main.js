var carName= document.querySelector(".car-name");
var carYear= document.querySelector(".car-year");
var carAdd= document.querySelector(".add-car");
var carSave= document.querySelector(".save-car");
let carList= JSON.parse(window.localStorage.carList);;
function addCar(){
	if(carName.value ===""){
		alert("Please Enter Name ")
	}else{
		carList.push({
			name: carName.value,
			year: carYear.value
		});
		carName.value="";
		carYear.value="";
		showCar();
	}
	
}
function showCar(){
	let carOutput= ``;
	if(carList.length===0){
		carOutput=`<p>There is no Data to show</p>`
	}
	for(let i=0; i<carList.length; i++){
		carOutput += `<li><strong>Car Name:</strong> ${carList[i].name}, <strong>Year:</strong> ${carList[i].year}</li>`
	}
	document.querySelector(".car-list").innerHTML = carOutput;
	localStorage.setItem("carList", JSON.stringify(carList));
}


localStorage.setItem("carList", JSON.stringify(carList));
showCar();
carAdd.addEventListener("click", addCar);


var carName= document.querySelector(".car-name");
var carYear= document.querySelector(".car-year");
var carAdd= document.querySelector(".add-car");
let carList= [];



carAdd.addEventListener("click", addCar);


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
	for(let i=0; i<carList.length; i++){
		carOutput += `<li>Car Name: ${carList[i].name}, Year: ${carList[i].year}</li>`
	}
	document.querySelector(".car-list").innerHTML = carOutput;
}

showCar();
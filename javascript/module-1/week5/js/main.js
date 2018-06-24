
// homework1
function findWeekName(){
	const day= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let date= new Date();
	let numberOfDays=parseInt(document.getElementById("numberOfDays").value);
	let toDayNumber;
	let currentDay=date.getDay();
	let outputText=`
		<p>Today is:  <span>${day[currentDay] }</span></p>
		<p>How many days to meet : <span>${numberOfDays}</span> </p>
	`;
	if(numberOfDays<=7){
		toDayNumber= numberOfDays;
	}else{
		toDayNumber= numberOfDays%7;
	}
	let total = currentDay + toDayNumber;
	if(total>=7){
		outputText +=`<p>We are meeting on : <span>${day[total-7]}</span> </p>`;
	}else{
		outputText +=`<p>We are meeting on : <span> ${day[total]} </span> </p> `;
	}

	document.getElementById("homework1").innerHTML=outputText;
	document.getElementById("homework1").classList.add("hw-bg");
}
const btn= document.getElementById("submitDays");
btn.addEventListener("click", function(){
	findWeekName();
});


// Homework2.3
let output="";
for(let i=1; i<=6; i++){
	for(let j=0; j<i; j++){
		output += `*`;
	}
	output += "<br>";
}

document.getElementById("homework2_3").innerHTML=output;

// homework2.2
let output2_2=""; 
for(let i=1; i<=1000; i++){
	if(i%5===0 && i%3===0){
		output2_2 += `<p>FizzBuzz</p>`;
	}else if(i%5===0){
		output2_2 += `<p>Fizz</p>`;
	}else if(i%3==0){
		output2_2 += `<p>Buzz </p>`;
	} else {
		output2_2 += `<p>${i}</p>`;
	}
}
document.getElementById("homework2_2").innerHTML=output2_2;

// Homework2.1
var hYF06= ['Zeeshan', 'Anas', 'Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna', 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'];
var students= [
				{
					firstName: "Zeeshan",
					lastName:"",
					address: "Vigersleveej 316 valby",
					telephone: 91770770,
					postCode:2500,
					course: ["css","Html","Javascipt"],
					grade:89
				},
				{
					firstName: "Anas",
					lastName:"",
					address: "Vigersleveej 316 valby",
					telephone: 91770770,
					postCode:2500,
					course: ["css","Html","Javascipt"],
					grade:62
				},
				{
					firstName: "Mohammad",
					lastName:"Subhiyeh",
					address: "Vigersleveej 316 valby",
					telephone: 91770770,
					postCode:2500,
					course: ["css","Html","Javascipt"],
					grade:69
				},
				{
					firstName: "Krishna ",
					lastName:"Rana",
					address: "Vigersleveej 316 valby",
					telephone: 91770770,
					postCode:2500,
					course: ["css","Html","Javascipt"],
					grade:86
				},
				{
					firstName: "Zoey ",
					lastName:"Zou",
					address: "Vigersleveej 316 valby",
					telephone: 91770770,
					postCode:2500,
					course: ["css","Html","Javascipt"],
					grade:92
				}
			]
function avarage(arr){
	let total =0;
	for(let i=0; i<arr.length; i++){
		total += arr[i].grade;
	}
	return total/arr.length;
}

function lowestGrade(arr){
	let lowest=arr[0].grade;
	for(let i=0; i<arr.length; i++){
		if(lowest>arr[i].grade){
			lowest=arr[i].grade;
		}
	}

	return lowest

}
function highestGrade(arr){
	let highest=arr[0].grade;
	for(let i=0; i<arr.length; i++){
		if(highest<arr[i].grade){
			highest=arr[i].grade;
		}
	}

	return highest

}
console.log("highestGrade", highestGrade(students));
console.log("lowestGrade",lowestGrade(students));
console.log("avarage", avarage(students));
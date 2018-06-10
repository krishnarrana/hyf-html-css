var hYF06= ['Zeeshan', 'Anas', 'Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna', 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'];

var classList= document.getElementById("classList");
var list= document.getElementById("list-pair");

// display class
function displayName(){
	classList.innerHTML="";
	hYF06.forEach(function(student,index){
	var pStudent = document.createElement("SPAN");
	pStudent.classList.add("student")
	var name= document.createTextNode(index+1 + ". "+ student);

	pStudent.appendChild(name);
	classList.appendChild(pStudent);
});
}
displayName();

// check if random number1 matches with random number2 
function createRandomNumber2(one,arrLength){
	let randomNumber2=Math.floor(Math.random()*(arrLength));
	if(one===randomNumber2){
		return createRandomNumber2(one,arrLength);
	}else{
		return randomNumber2;
	}
}
function generatePair(arr){
	var randomPair=[];
	function generateArr(arr){
		let newArr= arr.slice();
		let arrLength= newArr.length;
		let randomNumber1 =Math.floor(Math.random()*(arrLength));
		let randomNumber2=createRandomNumber2(randomNumber1,arrLength);
		if(newArr.length<=3){
			randomPair.push(newArr);
			return randomPair;
		}else{
			var pair=[ newArr[randomNumber1], newArr[randomNumber2] ] ;
			randomPair.push(pair);
			newArr.splice(randomNumber1,1);
			if(randomNumber1>randomNumber2){

				newArr.splice(randomNumber2,1);
			}else{
				newArr.splice(randomNumber2-1,1);
			}
			return generateArr(newArr)
		}

	}
	return generateArr(arr)
}

function myFunction() {
	list.innerHTML="";
	var pairList= generatePair(hYF06);
	for( var i=0; i< pairList.length; i++){
		var li= document.createElement("LI");
		var title = document.createElement("H2");
		var titleTxt = document.createTextNode("Pair " + (i+1));
		title.appendChild(titleTxt);
		li.classList.add("item");
		li.appendChild(title);
		li.classList.add("animation")
		for( var j=0; j< pairList[i].length; j++){
			var p = document.createElement("P");
			var pTxt = document.createTextNode(pairList[i][j]);
			p.appendChild(pTxt);

			li.appendChild(p);
		}

		list.appendChild(li);
	}
	
}
document.getElementById("clickBtn").addEventListener("click", myFunction);






var addBtn= document.getElementById("add");
addBtn.addEventListener("click", function(){
	var name= document.getElementById("name").value;
	if(name==""){
		alert("Please Enter Name of Student");
	}else{
		hYF06.push(name);
		document.getElementById("name").value="";

	}
	
	displayName();
})
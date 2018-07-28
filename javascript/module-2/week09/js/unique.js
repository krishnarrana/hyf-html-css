function uniqueValue(arr){
	let newArr=[];
	function checkValue(givenArr, giveValue){
		for(let value of givenArr){
			if(giveValue=== value){
				return false;
			}
		}
		return true;
	}

	newArr.push(arr[0]);
	for( let value of arr){
		if(checkValue(newArr, value)){
			newArr.push(value);
		}
	}
	return newArr;
	
}

let arr=['a', 'b', 'c', 'd', 'a', 'e', "11",'f', 'c',"11",1,2,1,2];

console.log(uniqueValue(arr))
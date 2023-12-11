function isSameType(value1, value2) {
  //your js code here
	if (isSameType>=48 && isSameType<=57) {
		console.log("true")
	}else if(isSameType=="hey" && isSameType=="hello"){
		console.log("true")
	}else if (isSameType !>=48 && isSameType!<=57) {
		console.log("true")
	}else if (isSameType =="3" && isSameType==3) {
		console.log("false")
	}
		
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

function romanize(){

	var num = document.getElementById("number").value;
	const originalNum = num;
	const decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	const romanNumeral = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

	var romanize =''; 

	for (var i = 0; i < decimalValue.length; i++){
		//will loop through decimal value array and when 
		//it arrives at a value less than or equal to num, 
		//then it will add the corresponding roman numeral 
		//and minus the decimal value, for example
		//if num is 51 , it will loop to 50 in the decimal 
		//value array and add the numeral for 50 then minus
		//50 from the num leaving 1, then will loop to 1 and 
		//add the 1
		while (decimalValue[i] <= num){
			romanize += romanNumeral[i];
			num -= decimalValue[i];
		}
	}

	$("#resultLine").html("The Roman numeral for "+ originalNum+ " is "+"<b>"+ romanize+"</b>");
}
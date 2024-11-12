function convertToRoman(num) {
  	
	const romanNumerals = [['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10],['V',5], ['I', 1]];
	let romanStr = '';

	for(let i = 0; i<=romanNumerals.length-1; i++){
		
		while (num>=romanNumerals[i][1]) {
            romanStr+=romanNumerals[i][0];
			num-=romanNumerals[i][1];
		}
	}

  //your code here
	return romanStr;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

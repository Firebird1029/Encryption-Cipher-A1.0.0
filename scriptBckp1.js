/* Before setAlphabet function. */

var i, currentTrans, quick, alphaLength, input, output = [];
var delimiter = "1029",
	additional = 1;
var alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaLength = alphabet.length;
for (i = 1; i < alphaLength; i++) {
	alphabet.push(alphabet[i].toUpperCase());
}
// document.write(alphabet + "<br />");
for (i = 0; i < 10; i++) {
	alphabet.push(i.toString());
}
// document.write(alphabet + "<br />");
alphaLength = alphabet.length;
for (i = 1; i < alphaLength; i++) {
	alphabet.push(alphabet[i] + delimiter);
}
// document.write(alphabet + "<br />");
function encode() {
	input = $("#eText").val();
	// alert(input.length);
	for (i = 0; i < input.length; i++) {
		// alert(input.charAt(i) + "bob");
		if (input.charAt(i) === " ") {
			currentTrans = 0;
		} else {
			currentTrans = alphabet.indexOf(input.charAt(i));
		}
		currentTrans += additional;
		output.push(alphabet[currentTrans]);
	}
	input = output;
	output = "";
	for (i = 0; i < input.length; i++) {
		output += input[i];
	}
	$("#result").html(output + "<br />");
}

function decode() {
	input = output;
	output = [];
	for (i = 0; i < input.length; i++) {
		if (input[i].indexOf(delimiter) > -1) {
			currentTrans = alphabet.indexOf(input[i]);
			currentTrans -= additional;
			output.push(alphabet[currentTrans]);
		} else {
			currentTrans = alphabet.indexOf(input[i]);
			currentTrans -= additional;
			output.push(alphabet[currentTrans]);
		}
	}
	input = output;
	output = "";
	for (i = 0; i < input.length; i++) {
		output += input[i];
	}
	$("#result").html(output + "<br />");
}
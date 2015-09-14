$("#eForm").submit(function() {
	var input = $("#eText").val();
	var delim = $("#eDelim").val();
	var addit = $("#eAddit").val();
	encode(input, delim, addit);
	$("#eText").val("");
	$("#eDelim").val("");
	$("#eAddit").val("");
	return false;
})

$("#dForm").submit(function() {
	var input = $("#dText").val();
	var delim = $("#dDelim").val();
	var addit = $("#dAddit").val();
	decode(input, delim, addit);
	$("#dText").val("");
	$("#dDelim").val("");
	$("#dAddit").val("");
	return false;
})


function setAlphabet(delim) {
	var alphaLength;
	var alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	alphaLength = alphabet.length;
	for (i = 1; i < alphaLength; i++) {
		alphabet.push(alphabet[i].toUpperCase());
	}
	for (i = 0; i < 10; i++) {
		alphabet.push(i.toString());
	}
	alphaLength = alphabet.length;
	for (i = 1; i < alphaLength; i++) {
		alphabet.push(alphabet[i] + delim);
	}
	// document.write(alphabet + "<br />");
	return alphabet;
}

function encode(input, delim, addit) {
	var i,
	currentTrans,
	output = [];
	var alphabet = setAlphabet(delim);
	// alert(input.length);
	for (i = 0; i < input.length; i++) {
		// alert(input.charAt(i) + "bob");
		if (input.charAt(i) === " ") {
			currentTrans = 0;
		} else {
			currentTrans = alphabet.indexOf(input.charAt(i));
		}
		currentTrans += Number(addit);
		output.push(alphabet[currentTrans]);
	}
	input = output;
	output = "";
	for (i = 0; i < input.length; i++) {
		output += input[i];
	}
	$("#result").html(output + "<br />");
}

function decode(input, delim, addit) {
	var i,
	currentTrans,
	output = [];
	var alphabet = setAlphabet(delim);
	for (i = 0; i < input.length; i++) {
		if (input[i].indexOf(delim) > -1) {
			currentTrans = alphabet.indexOf(input[i]);
			currentTrans -= Number(addit);
			output.push(alphabet[currentTrans]);
		} else {
			currentTrans = alphabet.indexOf(input[i]);
			currentTrans -= Number(addit);
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
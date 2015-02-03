
function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function adder (op, resultado) {
	var operation = document.getElementById(op);
	var operands = operation.innerHTML.split ("+");
	var result = parseInt(operands[0]) + parseInt(operands[1]);
	changer (resultado, '=' + result);
}

function adder_rand (op, resultado) {
       var operation = document.getElementById(op);
       operation.innerHTML = Math.round(Math.random()*1000) + "+" +
                             Math.round(Math.random()*1000)
	var operands = operation.innerHTML.split ("+");
	var result = parseInt(operands[0]) + parseInt(operands[1]);
	changer (resultado, '=' + result);
       }

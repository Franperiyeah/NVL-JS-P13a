var final = 100;
var inicio = 2;
var numeroprimo = [];
for (; inicio < final; inicio++) {
	if (primo(inicio)) {
		numeroprimo.push(inicio);
	}
}

function primo(n){
	for (var i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return n !== 1;
}
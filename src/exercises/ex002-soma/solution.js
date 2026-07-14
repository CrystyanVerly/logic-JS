import readline from 'readline-sync';
export default () => {
	const n1 = Number(readline.question(`Insira um numero A:  `));
	const n2 = Number(readline.question(`Insira um numero B:  `));

	function soma(a, b) {
		const resultado = a + b;
		console.log(`${a} + ${b} = ${soma}`);
		return soma;
	}

	if (isNaN(n1) || isNaN(n2)) {
		console.log('Insira apenas numeros');
	} else soma(n1, n2);
};

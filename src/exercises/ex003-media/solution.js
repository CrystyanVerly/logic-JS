import readline from 'readline-sync';
export default () => {
	const n1 = Number(readline.question(`Insira um numero A:  `));
	const n2 = Number(readline.question(`Insira um numero B:  `));

	function media(n1, n2) {
		const resultado = (n1 + n2) / 2;
		console.log(`A media entre ${n1} e ${n2} é ${media.toFixed(2)}`);
	}

	if (isNaN(n1) || isNaN(n2)) console.log('Insira apenas numeros.');
	else media(n1, n2);
};

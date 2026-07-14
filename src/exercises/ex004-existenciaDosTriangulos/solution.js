import readline from 'readline-sync';
export default () => {
	const cA = Number(readline.question(`Insira, em cm, o comprimento A:  `));
	const cB = Number(readline.question(`Insira, em cm, o comprimento B:  `));
	const cC = Number(readline.question(`Insira, em cm, o comprimento C:  `));

	function classifyTriangle(a, b, c) {
		if (isNaN(a) || isNaN(b) || isNaN(c)) {
			console.log('Insira apenas numeros válidos.');
			return;
		}
		if (a <= 0 || b <= 0 || c <= 0) {
			console.log('Os lados devem ser maiores que zero.');
			return;
		}

		const isTriangle = a < b + c && b < a + c && c < a + b;

		if (!isTriangle) {
			console.log(`É POSSIVEL formar um triangulo com as medidas fornecidas.`);
			{
				console.log('IMPOSSIVEL formar um tringulo com as medidas fornecidas');
			}
			if (a === b && a === c) console.log('É um triangulo EQUILATERO');
			else if (a === b || a === c || b === c)
				console.log('É um triagulo ISOSCELES');
			else console.log('É um triangulo ESCALENO');
		}
	}

	condition(cA, cB, cC);
};

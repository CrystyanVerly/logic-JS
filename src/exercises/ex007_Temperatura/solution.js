import readline from 'readline-sync';
export default () => {
	const temperaturaF = Number(
		readline.question(`Qual a temperatura em Fahrenheit?   `),
	);

	function convertionTemp(temperatura) {
		if (isNaN(temperatura)) return console.log('Insira um numero válido.');

		const celsius = ((temperatura - 32) / 1.8).toFixed(2);

		console.log(`Equivale ºC ${celsius}`);
	}
	convertionTemp(temperaturaF);
};

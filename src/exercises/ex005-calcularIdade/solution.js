import readline from 'readline-sync';
export default () => {
	const n1 = Number(readline.question(`Insira o ano de nascimento (aaaa):  `));

	function yearsCalc(yearBorn) {
		if (isNaN(yearBorn)) {
			console.log('Insira o ano de nascimento com números válidos.');
			return;
		}

		if (yearBorn < 0) {
			console.log('O ano deve ser um número positivo');
			return;
		}

		if (yearBorn.toString().length !== 4) {
			console.log('O ano deve ser formato de 4 digitos');
			return;
		}

		const anoAtual = new Date().getFullYear();

		if (yearBorn > anoAtual) {
			console.log(`Insira um ano até ${anoAtual}. Você não veio do futuro.`);
			return;
		}

		const yearsDifference = anoAtual - yearBorn;

		console.log(`Idade calculada: ${yearsDifference} anos de idade.`);
	}

	yearsCalc(n1);
};

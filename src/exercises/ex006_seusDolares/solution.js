import readline from 'readline-sync';
export default async () => {
	const reais = Number(
		readline.question(`Quantos reais (R$) voce quer converter:  `),
	);

	async function cambioDeMoedas(reais) {
		try {
			const response = await fetch(
				'https://economia.awesomeapi.com.br/json/last/BRL-USD',
			);
			const data = await response.json();

			const taxa = parseFloat(data.BRLUSD.bid);
			const valorConvertido = reais * taxa;

			const formatoUSD = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			});

			console.log(`Terá ${formatoUSD.format(valorConvertido)} dolares`);
		} catch (error) {
			console.log('Erro ao buscar', error);
		}
	}
	await cambioDeMoedas(reais);
};

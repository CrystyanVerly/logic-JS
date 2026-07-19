import readline from 'readline-sync';
export default () => {
	const compras = Number(readline.question(`Comprou quanto em produtos?: `));

	function imposto(valor) {
		if (isNaN(compras)) return console.log('Insira um número válido.');

		const imposto = 0.1;
		const valorTotal = valor * imposto + valor;

		console.log(`Seu produto custará R$ ${valorTotal} com 10% de imposto`);
	}
	imposto(compras);
};

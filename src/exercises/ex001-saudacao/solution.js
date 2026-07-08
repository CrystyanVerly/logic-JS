import r from 'readline-sync';
export default () => {
	const name = r.question(`Qual o seu nome?  `);

	console.log(`
		Hellow, world!
		Boas vindas ${name}, bons estudos!
		`);
};

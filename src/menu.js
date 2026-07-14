import readline from 'readline-sync';

import loadExercises from './loader.js';
import clear from './utils/clear.js';
import pause from './utils/pause.js';

export default async function menu() {
	const exercises = await loadExercises();

	while (true) {
		clear();

		console.log('=== Logic JS ===\n');

		exercises.forEach(({ meta }, index) => {
			console.log(`${index + 1} - ${meta.title}`);
		});

		console.log('0 - Sair');

		const option = Number(readline.question('\n> '));

		if (option === 0) break;

		const selectedExercise = exercises[option - 1];

		if (!selectedExercise) continue;

		while (true) {
			clear();

			console.log(selectedExercise.meta.title);
			console.log(selectedExercise.meta.description);

			console.log('\n1 - Exercício');
			console.log('2 - Solução');
			console.log('0 - Voltar');

			const action = Number(readline.question('\n> '));

			if (action === 0) break;

			clear();

			try {
				switch (action) {
					case 1:
						await selectedExercise.exercise();
						break;

					case 2:
						await selectedExercise.solution();
						break;

					default:
						console.log('Opção inválida.');
				}
			} catch (error) {
				console.error('\nErro ao executar o exercício.');
				console.error(error);
			}

			pause();
		}
	}
}

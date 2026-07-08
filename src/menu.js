import r from 'readline-sync';
import loadExercises from './loader.js';
import clear from './utils/clear.js';
import pause from './utils/pause.js';

export default async function menu() {
	const exercises = await loadExercises();
	while (true) {
		clear();
		console.log('=== Logic JS ===');
		exercises.forEach((e, i) => console.log(`${i + 1} - ${e.meta.title}`));
		console.log('0 - Sair');
		const op = Number(r.question('> '));
		if (op === 0) break;
		const ex = exercises[op - 1];
		if (!ex) continue;
		while (true) {
			clear();
			console.log(ex.meta.title);
			console.log(ex.meta.description);
			console.log('\n1-Exercício\n2-Solução\n0-Voltar');
			const c = Number(r.question('> '));
			if (c === 0) break;
			clear();
			if (c === 1) ex.exercise();
			if (c === 2) ex.solution();
			pause();
		}
	}
}

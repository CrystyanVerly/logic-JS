import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function loadExercises() {
	const root = path.join(__dirname, 'exercises');

	const directories = fs
		.readdirSync(root, { withFileTypes: true })
		.filter((dir) => dir.isDirectory())
		.map((dir) => dir.name)
		.sort();

	const exercises = [];

	for (const dir of directories) {
		const folder = path.join(root, dir);

		const { default: meta } = await import(
			pathToFileURL(path.join(folder, 'meta.js'))
		);

		const { default: exercise } = await import(
			pathToFileURL(path.join(folder, 'exercise.js'))
		);

		const { default: solution } = await import(
			pathToFileURL(path.join(folder, 'solution.js'))
		);

		exercises.push({
			meta,
			exercise,
			solution,
		});
	}

	return exercises;
}

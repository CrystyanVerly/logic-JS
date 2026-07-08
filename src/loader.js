import fs from 'fs';
import path from 'path';
import { pathToFileURL, fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default async function loadExercises() {
	const root = path.join(__dirname, 'exercises');
	const dirs = fs
		.readdirSync(root, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name)
		.sort();
	const list = [];
	for (const d of dirs) {
		const p = path.join(root, d);
		const meta = (await import(pathToFileURL(path.join(p, 'meta.js')))).default;
		const exercise = (await import(pathToFileURL(path.join(p, 'exercise.js'))))
			.default;
		const solution = (await import(pathToFileURL(path.join(p, 'solution.js'))))
			.default;
		list.push({ meta, exercise, solution });
	}
	return list;
}

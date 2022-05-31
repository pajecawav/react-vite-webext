import { useDemoStorage } from "@/stores/useDemoStorage";

export function App() {
	const { value, setValue } = useDemoStorage();

	return (
		<main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
			<img
				src="/assets/icon.svg"
				className="icon-btn mx-2 text-2xl"
				alt="extension icon"
			/>
			<div>Options</div>
			<p className="mt-2 opacity-50">This is the options page</p>

			<input
				className="border border-gray-400 rounded px-2 py-1 mt-2"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>

			<div className="mt-4">Powered by Vite</div>
		</main>
	);
}

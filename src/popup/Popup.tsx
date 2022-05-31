import { Logo } from "@/components/Logo";
import { useDemoStorage } from "@/stores/useDemoStorage";

export function App() {
	const value = useDemoStorage(state => state.value);

	console.log(browser.runtime.id, browser.runtime.getURL("callback"));

	function openOptionsPage() {
		browser.runtime.openOptionsPage();
	}

	return (
		<main className="w-[300px] px-4 py-5 text-center text-gray-700">
			<Logo />
			<div>Popup</div>
			<p className="mt-2 opacity-50">This is the popup page</p>
			<button className="btn mt-2" onClick={openOptionsPage}>
				Open Options
			</button>
			<div className="mt-2">
				<span className="opacity-50">Storage:</span> {value}
			</div>
		</main>
	);
}

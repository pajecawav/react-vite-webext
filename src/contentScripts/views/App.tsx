import { useState } from "react";
import { LogoIcon } from "@/components/Logo";
import { cn } from "@/utils";
import "../../styles/main.css";

export function App() {
	const [show, setShow] = useState(false);

	return (
		<div className="fixed right-0 bottom-0 m-5 z-100 flex font-sans select-none leading-1em">
			<div
				className={cn(
					"bg-white text-gray-800 rounded-full shadow w-max h-min px-4 py-2 my-auto mr-2 transition-opacity duration-300",
					show ? "opacity-100" : "opacity-0"
				)}
			>
				WebExt
			</div>
			<button
				className="grid w-10 h-10 place-items-center rounded-full shadow cursor-pointer bg-teal-600 hover:bg-teal-700 text-white"
				onClick={() => setShow(!show)}
			>
				<LogoIcon />
			</button>
		</div>
	);
}

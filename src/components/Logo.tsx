export function LogoIcon() {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M26.6667 1.66667H24V7H8V9.66667H5.33333V20.3333H8V23H10.6667V28.3333H21.3333V25.6667H26.6667V23H21.3333V20.3333H26.6667V17.6667H21.3333V15H10.6667V20.3333H8V9.66667H24V7H26.6667V1.66667ZM18.6667 25.6667H13.3333V17.6667H18.6667V25.6667Z" />
		</svg>
	);
}

export function Logo() {
	return (
		<a
			className="icon-btn mx-2 text-2xl grid place-items-center"
			rel="noreferrer"
			href="https://github.com/pajecawav/react-vite-webext"
			target="_blank"
			title="GitHub"
		>
			<LogoIcon />
		</a>
	);
}

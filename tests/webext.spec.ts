import {
	BrowserContext,
	chromium,
	expect,
	test as base,
} from "@playwright/test";
import fs from "fs";
import os from "os";
import path from "path";

export const test = base.extend<{
	context: BrowserContext;
	extensionId: string;
}>({
	// eslint-disable-next-line no-empty-pattern
	context: async ({}, use) => {
		const pathToExtension = path.join(__dirname, "../extension");
		const userDataDir = fs.mkdtempSync(
			path.join(os.tmpdir(), "react-vite-webext-")
		);
		const context = await chromium.launchPersistentContext("", {
			headless: false,
			args: [
				`--disable-extensions-except=${pathToExtension}`,
				`--load-extension=${pathToExtension}`,
			],
		});
		await use(context);
		await context.close();
		fs.rmdirSync(userDataDir);
	},
	extensionId: async ({ context }, use) => {
		// since this template uses `persistent: false` for the background page
		// we have to load our extension first
		// https://github.com/microsoft/playwright/issues/2676#issuecomment-648670584
		const page = await context.newPage();
		await page.goto("chrome://inspect/#extensions");

		let [background] = context.backgroundPages();
		if (!background) {
			background = await context.waitForEvent("backgroundpage");
		}

		page.close();

		const extensionId = background.url().split("/")[2];
		await use(extensionId);
	},
});

// TODO: this template uses Shadow DOM in `closed` mode for content script in
// production build and Playwright's `locator` only pierces Shadow DOM in `open` mode
// test("content script", async ({ page }) => {
// 	await page.goto("https://example.com");
// 	await page.locator("button").click();
// 	await expect(page.locator("body")).toContainText("WebExt");
// });

test("storage syncs between options and popup", async ({
	page,
	extensionId,
}) => {
	const value = "hello from web-ext";

	await page.goto(
		`chrome-extension://${extensionId}/dist/options/index.html`
	);
	await page.locator("input").fill(value);

	await page.goto(`chrome-extension://${extensionId}/dist/popup/index.html`);
	await expect(page.locator("body")).toContainText(value);
});

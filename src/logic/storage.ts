import { storage } from "webextension-polyfill";
import { StateStorage } from "zustand/middleware";

export const storageLocal: StateStorage = {
	removeItem: (key: string) => {
		return storage.local.remove(key);
	},
	setItem: (key: string, value: string) => {
		return storage.local.set({ [key]: value });
	},
	getItem: async (key: string) => {
		return (await storage.local.get(key))[key];
	},
};

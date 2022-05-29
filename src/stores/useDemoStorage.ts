import create from "zustand";
import { persist } from "zustand/middleware";
import { storageLocal } from "~/logic/storage";

interface Store {
	value: string;
	setValue: (value: string) => void;
}

export const useDemoStorage = create<Store>()(
	persist(
		set => ({
			value: "Storage Demo",
			setValue: (value: string) => set({ value }),
		}),
		{
			name: "storage-local",
			getStorage: () => storageLocal,
		}
	)
);

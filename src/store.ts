import { writable, type Writable} from "svelte/store";
export const mbtiData = [0,0,0,0];
export let mbtiString:Writable<string> = writable("");


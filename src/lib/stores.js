import { writable } from "svelte/store";

// place files you want to import through the `$lib` alias in this folder.
export const memeType = writable("file");

export const meme = writable({
  title: "",
  type: "file",
  tags: [],
  content: "",
  id: "",
});

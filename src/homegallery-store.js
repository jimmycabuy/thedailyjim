import { writable } from "svelte/store";

const homegallerypics = writable([]);

const customHomeGalleryPicsStore = {
  subscribe: homegallerypics.subscribe,
  setHomeGalleryPics: (homegallerypicsArray) => {
    homegallerypics.set(homegallerypicsArray);
  },
};

export default customHomeGalleryPicsStore;

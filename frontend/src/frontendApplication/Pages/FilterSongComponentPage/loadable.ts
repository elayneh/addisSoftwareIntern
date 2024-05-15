import { lazyLoad } from "./../../../utils/loadable";

export const FilteredSongPageLoader = lazyLoad(
  () => import("./index"),
  (module) => module.FilteredSongComponentPage
);

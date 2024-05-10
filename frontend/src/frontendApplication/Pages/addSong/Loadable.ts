import { lazyLoad } from "./../../../utils/loadable";

export const AddSongPageLoader = lazyLoad(
  () => import("./index"),
  (module) => module.AddSongPage
);

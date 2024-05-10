import { lazyLoad } from "./../../../utils/loadable";

export const UpdateSongPageLoader = lazyLoad(
  () => import("./index"),
  (module) => module.UpdateSongPage
);

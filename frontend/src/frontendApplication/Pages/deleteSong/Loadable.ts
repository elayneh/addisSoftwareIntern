import { lazyLoad } from "./../../../utils/loadable";

export const DeleteSongPageLoader = lazyLoad(
  () => import("./index"),
  (module) => module.DeleteSongPage
);

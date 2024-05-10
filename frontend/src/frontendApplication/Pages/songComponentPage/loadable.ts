import { lazyLoad } from "./../../../utils/loadable";

export const SongPageLoader = lazyLoad(
  () => import("./index"),
  (module) => module.SongComponentPage
);

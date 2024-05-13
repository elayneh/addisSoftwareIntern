import { lazyLoad } from "./../../../utils/loadable";

export const DashboardPageLoader = lazyLoad(
  () => import("./index"),
  (module) => module.DashboardComponentPage
);

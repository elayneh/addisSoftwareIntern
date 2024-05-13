/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDashboardPageSlice } from "./slice";
import Dashboard from "../../Components/Dashboard";
import { selectDashboardData } from "./slice/selector";

export const DashboardComponentPage = () => {
  const { actions } = useDashboardPageSlice();
  const dispatch = useDispatch();
  const dashboardData = useSelector(selectDashboardData);

  useEffect(() => {
    dispatch(actions.getDashboardRequest());
  }, []);
  return <Dashboard dashboardData={dashboardData} />;
};

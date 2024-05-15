/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDashboardPageSlice } from "./slice";
import Dashboard from "../../Components/Dashboard";
import { selectDashboardData } from "./slice/selector";
import { useNavigate } from "react-router-dom";

export const DashboardComponentPage = () => {
  const { actions } = useDashboardPageSlice();
  const dispatch = useDispatch();
  const dashboardData = useSelector(selectDashboardData);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(actions.getDashboardRequest());
    navigate("/songlist");
    navigate("/dashboard");
  }, []);
  return <Dashboard dashboardData={dashboardData} />;
};

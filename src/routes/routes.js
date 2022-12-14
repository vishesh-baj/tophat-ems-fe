import { Dashboard, EmployeeDashboard } from "../pages";
import { PATHS } from "./paths";

const routes = [
  {
    path: PATHS.dashboard,
    key: PATHS.dashboard,
    Element: <Dashboard />,
  },
  {
    path: PATHS.employeeDashboard,
    key: PATHS.employeeDashboard,
    Element: <EmployeeDashboard />,
  },
  {
    path: PATHS.login,
    key: PATHS.login,
  },
  {
    path: PATHS.register,
    key: PATHS.register,
  },
];

export default routes;

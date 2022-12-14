import { Dashboard } from "../pages";
import { PATHS } from "./paths";

const routes = [
  {
    path: PATHS.dashboard,
    key: PATHS.dashboard,
    Element: <Dashboard />,
  },
];

export default routes;

import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../router";
import getIsAuth from "../store/selector/getIsAuth";

function AppRouter() {
  const isAuth = useSelector(getIsAuth);
  const routes = useRoutes(isAuth ? PRIVATE_ROUTES : PUBLIC_ROUTES);
  return routes;
}

export default AppRouter;

import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import ProfilePage from "../pages/ProfilePage";
import CreateReportPage from "../pages/CreateReportPage";
import ReportDetailsPage from "../pages/ReportDetailsPage";

const PUBLIC_ROUTES = [
  { path: "/", element: <LoginPage /> },
  { path: "signup", element: <SignUpPage /> },
  { path: "*", element: <ErrorPage /> },
];

const PRIVATE_ROUTES = [
  { path: "/", element: <ProfilePage /> },
  { path: "/create", element: <CreateReportPage /> },
  { path: "/report/:id", element: <ReportDetailsPage /> },
  { path: "*", element: <ErrorPage /> },
];

export { PUBLIC_ROUTES, PRIVATE_ROUTES };

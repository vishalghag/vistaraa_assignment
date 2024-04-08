import route from "../pageRoutes/routes.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl">404 Page not found</h1>
      <Link to={route.HOME} className="mt-4 text-red-600 font-medium">
        Click here to get back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;

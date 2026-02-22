import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="notfound">
      <h1>404 - Page Not Found</h1>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
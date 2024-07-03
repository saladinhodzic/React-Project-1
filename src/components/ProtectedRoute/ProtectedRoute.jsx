import { Auth } from "../../pages/Auth/Auth";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
  }
  return <Auth />;
}

export default ProtectedRoute;

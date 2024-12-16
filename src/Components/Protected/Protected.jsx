import { Navigate } from "react-router-dom";

const Protected = ({ isLogIn, children }) => {
  if (!isLogIn) {
    return <Navigate to="/" replace></Navigate>;
  } else {
    return children;
  }
};

export default Protected;

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = false;

  if (!token) {
    return <Navigate to="/signin" />;
  }
  return children;
}

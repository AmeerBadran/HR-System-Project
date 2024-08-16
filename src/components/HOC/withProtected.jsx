/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element }) {
  const token = 'get the access token from redux or localstorage or cookie';
  return token ? element : <Navigate to={'/login'} />
}
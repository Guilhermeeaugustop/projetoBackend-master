// src/auth/RedirectIfAuthed.jsx
import { Navigate, useLocation } from "react-router-dom";
import { isAuthed } from "./authStorage";

export default function RedirectIfAuthed({ children }) {
  const location = useLocation();
  return isAuthed()
    ? <Navigate to="/Site" replace state={{ from: location }} />
    : children;
}

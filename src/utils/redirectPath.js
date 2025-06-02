import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Daftar path yang diperbolehkan
export const whiteListPaths = [
  "/about",
  "/doctor",
  "/inpatient-room",
  "/detail-inpatient-room",
  "/polyclinic",
];

const RedirectPath = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect(() => {
    const isWhitelisted = whiteListPaths.some((allowedPath) => {
      if (allowedPath.includes(":")) return false; // skip path dinamis, karena kita handle dengan prefix
      return path.startsWith(allowedPath);
    });

    const isDetailInpatientRoom = path.startsWith("/detail-inpatient-room");

    if (!isWhitelisted && !isDetailInpatientRoom && path !== "/") {
      navigate("/", { replace: true });
    }
  }, [path, navigate]);

  return null; // tidak perlu render apa pun
};

export default RedirectPath;

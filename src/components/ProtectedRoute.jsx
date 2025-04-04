// import { Navigate } from "react-router-dom";
// import { getUser } from "../utils/auth"; // สมมุติว่ามีฟังก์ชันนี้ดึงข้อมูล user จาก localStorage

// const ProtectedRoute = ({ children, roles = [] }) => {
//   const user = getUser(); // เช่น { id: 1, name: "Admin", role: "admin" }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   // ถ้า roles ไม่ว่าง และ role ของ user ไม่อยู่ใน roles ที่กำหนด
//   if (roles.length > 0 && !roles.includes(user.role)) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

// แบบเก่า
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

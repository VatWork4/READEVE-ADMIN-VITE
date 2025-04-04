import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { ConfigProvider } from "antd";
import thTH from "antd/locale/th_TH"; // Optional: ถ้าอยากใช้ locale ภาษาไทย
import Participants from "./pages/Participants";
import Contest from "./pages/Contest";
import { setupAuthListener } from "./utils/auth";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setupAuthListener(); // ฟัง token เปลี่ยนจากแท็บอื่น
  }, []);

  return (
    <ConfigProvider
      // locale={thTH}
      theme={{
        token: {
          fontFamily: "Mitr, sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* หน้า Login ไม่มี Layout */}
          <Route path="/login" element={<Login />} />

          {/* หน้าอื่นใช้ Layout มี Sidebar */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/participants"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Participants />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contest"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Contest />
                </MainLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;

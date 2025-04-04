import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // สถานะโหลดของปุ่ม

  useEffect(() => {
    if (isAuthenticated()) {
      message.warning("คุณเข้าสู่ระบบอยู่แล้ว");
      navigate("/"); // redirect ไปหน้าหลัก
    }
  }, []);

  // ฟังก์ชันสำหรับการส่งข้อมูลไปที่ API
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/adminreadeve/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            admin_id: values.admin_id,
            password: values.password,
          }),
        }
      );

      const data = await response.json();
      console.log("LOGIN RESPONSE", data);

      const newToken = data?.data?.token;

      if (data?.code === 202 && data?.data?.Double === "Double") {
        // 🟠 กรณีมีการ login ซ้อน ให้ logout session เดิม
        console.log("Double login detected. Logging out previous session...");

        const logoutRes = await fetch(
          `${import.meta.env.VITE_API_URL}/adminreadeve/logoutadmin`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: newToken,
            },
          }
        );

        const logoutData = await logoutRes.json();
        console.log("Logout response:", logoutData);

        message.info("บัญชีเก่าถูกออกจากระบบแล้ว");
      }

      if ((data?.code === 200 || data?.code === 202) && newToken) {
        // login ได้ปกติหลังจาก logout session เก่า (หรือ login ครั้งแรก)
        login(newToken);
        message.success("เข้าสู่ระบบสำเร็จ");
        navigate("/");
      } else {
        message.error(data.message || "เกิดข้อผิดพลาดในการล็อกอิน");
      }
    } catch (error) {
      console.error("Login failed:", error);
      message.error("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handleLogin = () => {
  //   login("fake-token"); // ในอนาคตสามารถใช้ username/password ได้
  //   navigate("/");
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F7EEFF]">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-[700px] mx-auto">
        <img src="/public/navbar/logo.png" />
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 100 }}
          wrapperCol={{ span: 100 }}
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="ผู้ใช้"
            name="admin_id"
            rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้งาน!" }]}
          >
            <Input className="custom-input" />
          </Form.Item>

          <Form.Item
            label="รหัสผ่าน"
            name="password"
            rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน!" }]}
          >
            <Input.Password className="custom-input" />
          </Form.Item>
          <Form.Item label={null}>
            <Button
              htmlType="submit"
              className="custom-login-button w-full"
              loading={loading}
            >
              ล็อคอิน
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

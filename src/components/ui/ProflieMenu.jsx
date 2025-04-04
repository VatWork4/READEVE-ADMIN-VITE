import { Badge, Dropdown } from "antd";
import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { jwtDecode } from "jwt-decode";

export default function ProflieMenu() {
  const token = localStorage.getItem("token");

  let username = "ไม่ทราบชื่อ";
  if (token) {
    try {
      const decoded = jwtDecode(token); // ✅ แก้ตรงนี้ด้วย
      username = decoded.username || "ไม่ทราบชื่อ";
    } catch (error) {
      console.error("Token ไม่ถูกต้อง:", error);
    }
  }

  const [notifications] = useState([
    "ระบบจะปิดปรับปรุง",
    "มีผู้ใช้งานใหม่ลงทะเบียน",
  ]);

  const items = [
    ...notifications.map((msg, idx) => ({
      key: `notify-${idx}`,
      label: msg,
    })),
    {
      type: "divider",
    },
    {
      key: "all",
      label: <span className="text-[#654CCB]">ดูทั้งหมด</span>,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <Dropdown menu={{ items }} placement="bottom" trigger={["click"]} arrow>
        <Badge count={notifications.length} size="small">
          <MdNotifications
            size={24}
            color="#654CCB"
            className="cursor-pointer"
          />
        </Badge>
      </Dropdown>
      <span className="text-[#654CCB] text-[15px]">{username}</span>
      <BsPersonFill size={24} color="#654CCB" />
    </div>
  );
}

import { useState } from "react";
import {
  MdExitToApp,
  MdLibraryBooks,
  MdOutlineEventNote,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { logout } from "../utils/auth";

const menuItems = [
  { label: "หน้าหลัก", path: "/" },
  { label: "จัดการผู้ใช้งาน", path: "/admin/users" },
  { label: "จัดการหนังสือ", path: "/admin/books" },
  {
    label: "จัดการโพสต์",
    path: "/admin/posts",
    // icon: <MdOutlineEventNote size={24} />,
  },
  {
    label: "จัดการโดเนท",
    path: "/admin/donate",
    // icon: <MdOutlineEventNote size={24} />,
  },
];

const dropdownMenus = [
  {
    key: "banner",
    label: "จัดการแบนเนอร์",
    links: [
      { label: "แบนเนอร์ 2D", path: "/admin/b2d" },
      { label: "แบนเนอร์ 3D", path: "/admin/b3d" },
    ],
  },
  {
    key: "activity",
    label: "กิจกรรม",
    links: [
      { label: "ประกวดนิยาย", path: "/contest" },
      { label: "รายชื่อผู้เข้าร่วม", path: "/participants" },
    ],
  },
  {
    key: "settings",
    label: "ตั้งค่า เว็บ/แอป",
    links: [
      { label: "เว็บ", path: "/admin/web" },
      { label: "แอป", path: "/admin/app" },
    ],
  },
];

// รวมเมนูให้แสดงแบบปนกัน
const mixedMenu = [
  { type: "item", data: menuItems[0] }, // หน้าหลัก
  { type: "item", data: menuItems[1] }, // จัดการผู้ใช้งาน
  { type: "item", data: menuItems[2] }, // จัดการหนังสือ
  { type: "dropdown", data: dropdownMenus[0] }, // แบนเนอร์
  { type: "item", data: menuItems[3] }, // จัดการโพสต์
  { type: "dropdown", data: dropdownMenus[1] }, // กิจกรรม
  { type: "item", data: menuItems[4] }, // จัดการโดเนท
  { type: "dropdown", data: dropdownMenus[2] }, // ตั้งค่า
];

const SideBarAdmin = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="bg-[#F5EFFF] flex flex-col min-h-screen">
      <div className="p-4">
        <img src="/navbar/logo.png" alt="Logo" width={236} height={60} />
      </div>

      <div className="mt-9">
        {mixedMenu.map((menu, idx) => {
          if (menu.type === "item") {
            const item = menu.data;
            return (
              <div key={`item-${idx}`} className="p-2.5">
                <Link
                  to={item.path}
                  className="text-[#845EF9] text-lg font-medium flex items-center gap-3"
                >
                  {/* แสดง icon ถ้ามี */}
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                </Link>
              </div>
            );
          }

          if (menu.type === "dropdown") {
            const dropdown = menu.data;
            return (
              <div key={`dropdown-${dropdown.key}`} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(dropdown.key)}
                  className="hover:bg-[#A294F9] px-4 py-2 hover:text-white text-[#845EF9] focus:bg-[#A294F9] focus:text-white flex w-full justify-between items-center transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <MdOutlineEventNote size={24} />
                    <span className="text-lg font-medium">
                      {dropdown.label}
                    </span>
                  </div>
                  <svg
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      openDropdowns[dropdown.key] ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openDropdowns[dropdown.key]
                      ? "max-h-[200px] py-2"
                      : "max-h-0"
                  } bg-[#D6CCFF]`}
                >
                  <div className="py-1">
                    {dropdown.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.path}
                        className="block px-4 py-2 text-white font-medium hover:text-[#845EF9]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className="mt-4 p-4 flex justify-center">
        <button
          onClick={logout}
          className="flex items-center gap-2 font-medium text-lg text-[#845EF9] hover:text-white hover:bg-[#A294F9] px-4 py-2 transition-all duration-300"
        >
          ออกจากระบบ <MdExitToApp size={24} />
        </button>
      </div>
    </div>
  );
};

export default SideBarAdmin;

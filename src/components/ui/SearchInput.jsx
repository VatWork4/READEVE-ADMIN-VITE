import { Input } from "antd";
import { FiSearch } from "react-icons/fi";

export default function SearchInput({ onSearch }) {
  return (
    <Input
      placeholder="ค้นหา"
      allowClear
      size="middle"
      className="max-w-sm"
      style={{
        border: "1px solid #A294F9", // สีม่วง
        borderRadius: "6px", // เพิ่มความโค้งเล็กน้อย
      }}
      suffix={
        <FiSearch
          className="text-gray-500 cursor-pointer hover:text-black"
          onClick={(e) => {
            const value = e.currentTarget
              .closest("div")
              .querySelector("input").value;
            onSearch(value);
          }}
        />
      }
      onPressEnter={(e) => onSearch(e.target.value)}
    />
  );
}

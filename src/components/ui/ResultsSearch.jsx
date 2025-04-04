import { Button, Input } from "antd";
import { FiSearch } from "react-icons/fi";
const { Search } = Input;

export default function ResultsSearch({ countAllTotal, countSumTotal }) {
  const onSearch = (value) => {
    console.log("Search:", value);
    // ทำการค้นหาจาก value ได้ที่นี่
  };

  return (
    <div className="flex  justify-between item-center">
      <section className="font-light text-[#7A7A7A] flex gap-[16px]">
        <span>
          ทั้งหมด{" "}
          <span className="text-[#A294F9]">
            {countAllTotal ? countAllTotal : 0}
          </span>{" "}
          รายการ
        </span>
        <span>
          ผลลัพธ์การกรอง{" "}
          <span className="text-[#A294F9]">
            {countSumTotal ? countSumTotal : 0}
          </span>{" "}
          รายการ
        </span>
      </section>
      <section>
        <Input
          placeholder="ค้นหา"
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
          allowClear
          size="middle"
          className="max-w-sm"
          onPressEnter={(e) => onSearch(e.target.value)}
        />
      </section>
    </div>
  );
}

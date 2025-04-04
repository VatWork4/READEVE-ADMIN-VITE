export default function ResultsAll({ countAllTotal, countSumTotal }) {
  return (
    <section className="font-light text-[#7A7A7A] flex gap-[16px] items-center">
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
  );
}

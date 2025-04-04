import { Button, Space, Tag } from "antd";
import HeaderTitle from "../components/ui/HeaderTitle";
import ProflieMenu from "../components/ui/ProflieMenu";
import ResultsAll from "../components/ui/ResultsAll";
import SearchInput from "../components/ui/SearchInput";
import { FiPlus } from "react-icons/fi";
import TableAdmin from "../components/TableAdmin";
import ButtonDetail from "../components/ui/ButtonDetail";
import ButtonEdit from "../components/ui/ButtonEdit";

export default function Contest() {
  // ตัวอย่างข้อมูล
  const dataSource = [
    {
      key: "1",
      createdAt: "01/02/2025",
      eventName: "กิจกรรมแต่งนิยายรักจีนโบราณ",
      novelName: "รักจีนโบราณ",
      submission_period: ["01/02/2050", "03/02/2050"],
      judging_period: ["04/02/2050", "05/02/2050"],
      announcement: ["07/02/2050", "08/02/2050"],
      status_contest: "process",
      isShow: true,
    },
    {
      key: "2",
      createdAt: "01/02/2025",
      eventName: "กิจกรรมแต่งนิยายรักจีนโบราณ",
      novelName: "รักจีนโบราณ",
      submission_period: ["01/02/2050", "03/02/2050"],
      judging_period: ["04/02/2050", "05/02/2050"],
      announcement: ["07/02/2050", "08/02/2050"],
      status_contest: "process",
      isShow: true,
    },
    {
      key: "3",
      createdAt: "01/02/2025",
      eventName: "กิจกรรมแต่งนิยายรักจีนโบราณ",
      novelName: "รักจีนโบราณ",
      submission_period: ["01/02/2050", "03/02/2050"],
      judging_period: ["04/02/2050", "05/02/2050"],
      announcement: ["07/02/2050", "08/02/2050"],
      status_contest: "process",
      isShow: true,
    },
    {
      key: "4",
      createdAt: "01/02/2025",
      eventName: "กิจกรรมแต่งนิยายรักจีนโบราณ",
      novelName: "รักจีนโบราณ",
      submission_period: ["01/02/2050", "03/02/2050"],
      judging_period: ["04/02/2050", "05/02/2050"],
      announcement: ["07/02/2050", "08/02/2050"],
      status_contest: "process",
      isShow: true,
    },
  ];

  // คอลัมน์
  const columns = [
    {
      title: "วันที่สร้าง",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "ชื่อกิจกรรม",
      dataIndex: "eventName",
      key: "eventName",
    },
    {
      title: "หัวข้อนิยาย",
      dataIndex: "novelName",
      key: "NovelName",
    },
    {
      title: "ระยะเวลาส่งผลงาน",
      dataIndex: "submission_period",
      key: "submission_period",
      align: "center",
      render: (dates) => (
        <>
          {dates[0]}
          <br />
          ถึง
          <br />
          {dates[1]}
        </>
      ),
    },
    {
      title: "ระยะเวลาตัดสิน",
      dataIndex: "judging_period",
      key: "judging_period",
      align: "center",
      render: (dates) => (
        <>
          {dates[0]}
          <br />
          ถึง
          <br />
          {dates[1]}
        </>
      ),
    },
    {
      title: "วันประกาศผล",
      dataIndex: "announcement",
      key: "announcement",
      align: "center",
      render: (dates) => <>{dates[0]}</>,
    },
    {
      title: "สถานะ",
      dataIndex: "status_contest",
      key: "status_contest",
      align: "center",
      render: (status) => {
        const statusMap = {
          submission: { color: "green", label: "กำลังส่งผลงาน" },
          judging: { color: "gold", label: "กำลังตัดสินงาน" },
          announcement: { color: "blue", label: "ประกาศผล" },
          closed: { color: "default", label: "สิ้นสุดงาน" },
          upcoming: { color: "purple", label: "รอกิจกรรมเริ่ม" },
        };

        const { color, label } = statusMap[status] || statusMap.upcoming;
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      title: "แสดง/ซ่อน",
      dataIndex: "isShow",
      key: "isShow",
      align: "center",
    },
    {
      title: "ตัวเลือก",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <Space direction="vertical" size="small">
          <ButtonDetail record={record} />

          <ButtonEdit record={record} />
        </Space>
      ),
    },
  ];

  const onSearch = (value) => {
    console.log("Search:", value);
    // ทำการค้นหาจาก value ได้ที่นี่
  };

  return (
    <div className="container space-y-10">
      <section className="flex justify-between item-center ">
        <HeaderTitle title={"กิจกรรมประกวด"} />
        <ProflieMenu />
      </section>
      <section>
        <div className="flex">
          <Button style={{ backgroundColor: "#654CCB", color: "#ffffff" }}>
            <FiPlus />
            เพิ่มกิจกรรม
          </Button>
          <section className="w-full flex justify-end gap-5">
            <ResultsAll countAllTotal={dataSource.length} countSumTotal={0} />
            <section>
              <SearchInput onSearch={onSearch} />
            </section>
          </section>
        </div>
      </section>
      <div>
        <TableAdmin dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

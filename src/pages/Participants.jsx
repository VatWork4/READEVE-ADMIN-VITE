import { Table, Button, Space } from "antd";
import HeaderTitle from "../components/ui/HeaderTitle";
import ProflieMenu from "../components/ui/ProflieMenu";
import ResultsSearch from "../components/ui/ResultsSearch";
import {
  EditOutlined,
  EyeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import TableAdmin from "../components/TableAdmin";
import ButtonEdit from "../components/ui/ButtonEdit";
import ButtonDetail from "../components/ui/ButtonDetail";
// ตัวอย่างข้อมูล
const dataSource = [
  {
    key: "1",
    penName: "DarkDev",
    fullName: "สมชาย ใจดี",
    email: "darkdev@example.com",
    phone: "0812345678",
    contestCount: 5,
  },
  {
    key: "2",
    penName: "LightWriter",
    fullName: "สาวิตรี แสงทอง",
    email: "light@example.com",
    phone: "0898765432",
    contestCount: 2,
  },
];

// คอลัมน์
const columns = [
  {
    title: "ชื่อนามปากกา",
    dataIndex: "penName",
    key: "penName",
  },
  {
    title: "ชื่อ-นามสกุล",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "อีเมล",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "เบอร์โทร",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "จำนวนที่เข้าประกวด",
    dataIndex: "contestCount",
    key: "contestCount",
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

export default function Participants() {
  return (
    <div className="container space-y-10">
      <section className="flex justify-between item-center ">
        <HeaderTitle title={"รายชื่อผู้เข้าร่วม"} />
        <ProflieMenu />
      </section>
      <section>
        <ResultsSearch countAllTotal={dataSource.length} />
      </section>
      <div>
        <TableAdmin dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

import { UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ButtonDetail({ record }) {
  return (
    <Button
      type="default"
      shape="round"
      style={{
        backgroundColor: "#4580FF",
        color: "#FFFFFF",
        border: "none",
        width: "140px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
      onClick={() => {
        console.log("ดูรายละเอียด", record);
      }}
    >
      <UnorderedListOutlined />
      <span style={{ flex: 1, textAlign: "center" }}>รายละเอียด</span>
    </Button>
  );
}

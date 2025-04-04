import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ButtonEdit({ record }) {
  return (
    <Button
      type="default"
      shape="round"
      style={{
        backgroundColor: "#FF8C45",
        color: "#FFFFFF",
        border: "none",
        width: "140px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
      onClick={() => {
        console.log("แก้ไข", record);
      }}
    >
      <EditOutlined />
      <span style={{ flex: 1, textAlign: "center" }}>แก้ไข</span>
    </Button>
  );
}

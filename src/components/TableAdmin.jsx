import { Table } from "antd";

export default function TableAdmin({ dataSource, columns }) {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      bordered
      pagination={{
        pageSize: 5,
        position: ["bottomCenter"],
      }}
      rowKey="key"
      className="custom-ant-table"
    />
  );
}

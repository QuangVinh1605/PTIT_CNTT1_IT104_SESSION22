import React from "react";
import { Alert, Space } from "antd";

export default function AlertsExample() {
  return (
    <Space direction="vertical" style={{ width: "100%", maxWidth: 500 }}>
      <Alert
        message="Thêm tài khoản thành công."
        type="success"
        showIcon={false}
        closable
      />
      <Alert
        message="Thêm mới tài khoản thất bại."
        type="error"
        showIcon={false}
        closable
      />
      <Alert
        message="Tên không được để trống."
        type="warning"
        showIcon={false}
        closable
      />
    </Space>
  );
}


import React from "react";
import { Dropdown, Button, Space } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <span>Cài đặt</span>,
  },
  {
    key: "2",
    label: <span>Đổi mật khẩu</span>,
  },
  {
    key: "3",
    danger: true,
    label: <span>Đăng xuất</span>,
  },
];

export default function UserDropdown() {
  return (
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
        <Button>
          Nguyễn Văn Nam <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
}


import React from 'react';
import Button from 'react-bootstrap/Button';

const Bai1: React.FC = () => (
<>
      <Button variant="primary">Lưu</Button>
      <Button variant="secondary">Hủy</Button>
      <Button variant="success">Thành công</Button>
      <Button variant="warning">Cảnh báo</Button>
      <Button variant="danger">báo lỗi</Button>
      <Button variant="info">thông tin</Button>
      <Button variant="link">đường dẫn</Button>
    </>
);

export default Bai1;
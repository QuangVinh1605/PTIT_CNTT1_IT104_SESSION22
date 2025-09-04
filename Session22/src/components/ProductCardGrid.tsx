import React from "react";
import { Card, Button, Row, Col, Typography, Space } from "antd";
import "antd/dist/reset.css";

const { Meta } = Card;
const { Text, Title } = Typography;

// Định dạng tiền VND
const vnd = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });

type Product = {
  id: number;
  name: string;
  year?: string;
  desc: string;
  price: number;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "MacBook Air",
    year: "2018",
    desc:
      "The reason I am selling the machine is because it is too much power for what I need",
    price: 30000000,
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "MacBook Pro",
    year: "2019",
    desc:
      "he reason I am selling the machine is because it is too much power for what I need",
    price: 30000000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  // Có thể thêm nhiều sản phẩm hơn ở đây
];

const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  overflow: "hidden",
  boxShadow:
    "0 2px 6px rgba(0,0,0,0.06), 0 12px 24px -8px rgba(0,0,0,0.12)",
};

const coverStyle: React.CSSProperties = {
  height: 180,
  objectFit: "cover",
};

function PriceRow({ price }: { price: number }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 12,
    }}>
      <Button type="primary" size="middle">Xem chi tiết</Button>
      <Text type="secondary">{vnd.format(price)}</Text>
    </div>
  );
}

export default function ProductCardGrid() {
  return (
    <div style={{ padding: 24 }}>
      <Title level={4} style={{ marginBottom: 20 }}>Sản phẩm nổi bật</Title>

      <Row gutter={[20, 20]}>
        {PRODUCTS.map((p) => (
          <Col key={p.id} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              style={cardStyle}
              cover={<img alt={p.name} src={p.image} style={coverStyle} />}
            >
              <Space direction="vertical" size={6} style={{ width: "100%" }}>
                <Meta
                  title={
                    <span>
                      {p.name} {p.year && <Text type="secondary">{p.year}</Text>}
                    </span>
                  }
                  description={<Text type="secondary">{p.desc}</Text>}
                />
                <PriceRow price={p.price} />
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


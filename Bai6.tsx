import React from "react";
import { Spinner, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Bai6() {
  return (
    <Stack gap={3} className="align-items-center">
      <Spinner animation="border" role="status" style={{ color: "#0d6efd" }} />
      <Spinner animation="border" role="status" variant="secondary" />
      <Spinner animation="border" role="status" style={{ color: "#22c55e" }} />
    </Stack>
  );
}

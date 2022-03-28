import React from "react";
import { useParams } from "react-router-dom";

function ReportDetails() {
  const param = useParams();
  return <div>{param}</div>;
}

export default ReportDetails;

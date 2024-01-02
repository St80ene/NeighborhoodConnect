import { Spin } from "antd";

export default function Loader() {
  return (
    <div className="loading-container d-flex align-items-center justify-content-center">
      <Spin style={{ width: "50px", height: "50px" }} />
      Loading
    </div>
  );
}

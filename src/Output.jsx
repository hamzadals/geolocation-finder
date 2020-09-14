import React from "react";
import "./styles.css";
const Output = ({ ip, country, current_time, isp }) => {
  let time;
  if (current_time != null) time = current_time.substr(0, 10);
  return (
    <div className="output">
      <ul>
        <li>IP <strong>{ip}</strong></li><div className="bd"></div>
        <li>Country <strong>{country}</strong></li><div className="bd"></div>
        <li>TimeZone <strong>{time}</strong></li><div className="bd"></div>
        <li>ISP <strong>{isp}</strong></li>
      </ul>
    </div>
  );
};
export default Output;

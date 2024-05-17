import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ConfigProvider } from "antd";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXpfc3RcR2lfWEFzXUY=",
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: "rgba(255,255,255, 0.75)",
        },
        components: {
          Select: {
            selectorBg: "transparent",
            colorBorder: "rgba(255,255,255, 0.50)",
            borderRadius: "4px",
          },
          Collapse: {
            colorText: "#fff",
            colorTextHeading: "#fff",
            fontSize: "16px",
            lineHeight: "20px",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);

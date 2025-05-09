// src/components/MermaidChart.jsx
import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import Cookies from "js-cookie";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
});

const MermaidChart = ({ chart }) => {
  const chartRef = useRef(null);
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get("cookievalue");
    setIsCookieAccepted(cookie === "1");
  }, []);

  useEffect(() => {
    if (isCookieAccepted && chartRef.current) {
      const uniqueId = `mermaid-${Math.floor(Math.random() * 1000000)}`;
      const svgWrapper = document.createElement("div");
      svgWrapper.className = "mermaid";
      svgWrapper.id = uniqueId;
      svgWrapper.textContent = chart;

      chartRef.current.innerHTML = "";
      chartRef.current.appendChild(svgWrapper);

      mermaid.init(undefined, `#${uniqueId}`);
    }
  }, [chart, isCookieAccepted]);

  if (!isCookieAccepted) {
    return (
      <div className="w-full bg-yellow-50 border border-yellow-300 text-yellow-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-2">🔒 Cookie Consent Required</h2>
        <p className="text-sm">
          To check your activity data, you must first accept cookies.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={chartRef}
      style={{ minHeight: "200px" }}
      className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-lg"
    ></div>
  );
};

export default MermaidChart;

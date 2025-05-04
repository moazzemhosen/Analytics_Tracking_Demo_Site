// src/components/MermaidChart.jsx
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "default",
  });

const MermaidChart = ({ chart }) => {
    const chartRef = useRef(null);

    useEffect(() => {
      if (chartRef.current) {
        // Generate a unique ID for each render
        const uniqueId = `mermaid-${Math.floor(Math.random() * 1000000)}`;
        const svgWrapper = document.createElement("div");
        svgWrapper.className = "mermaid";
        svgWrapper.id = uniqueId;
        svgWrapper.textContent = chart;
  
        chartRef.current.innerHTML = "";
        chartRef.current.appendChild(svgWrapper);
  
        mermaid.init(undefined, `#${uniqueId}`);
      }
    }, [chart]);
  
    return (
      <div
  ref={chartRef}
  style={{ minHeight: "200px" }}
  className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-lg"
>
</div>

    );
};

export default MermaidChart;

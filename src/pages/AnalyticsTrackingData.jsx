import React from 'react'
import Navbar from '../components/Navbar';
import MermaidChart from './MermaidChart';



const AnalyticsTrackingData = () => {
  const chart = `
graph TD
    A[Start] --> B[moazzem@gmail.com]
    B --> C[Kolkata]
    C --> D{Valid Credentials?}
    D -- Yes --> E[Login Success]
    D -- No --> F[Show Error]
`;
  return (
    <div>
      <Navbar/>
      <div style={{ padding: "2rem" }}>
      <h1>Flowchart Example</h1>
      <MermaidChart chart={chart} />
    </div>
    </div>
  )

}

export default AnalyticsTrackingData;
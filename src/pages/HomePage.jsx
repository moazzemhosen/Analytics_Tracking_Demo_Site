
import Navbar from '../components/Navbar';

import { useState } from 'react';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Float from './Float';


function HomePage() {
  const [data, setData] = useState([
    { "Name": "Data Collection", "Details": "Gather all media data templates, upload the raw templates, conduct a sanity check to validate their structure and content, and review the mapping to ensure accurate field correspondence with our system", "link": "/dataCollection" },
    { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/reportDashboard" },
    { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/userManagement" },
    { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/otherSection" },
  ])
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Heading/>
      <Card/>
      <Float/>
    </div>
  );
}

export default HomePage;


import Navbar from '../components/Navbar';

import { useState } from 'react';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Float from './Float';


function HomePage() {
 
  return (
    <div  id="HomePage" className="min-h-screen">
      <Navbar/>
      <Heading/>
      <Card/>
      <Float/>
    </div>
  );
}

export default HomePage;

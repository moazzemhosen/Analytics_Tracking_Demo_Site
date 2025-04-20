import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import ProtectedRoute from "./components/ProtectedRoute";
import DownloadTemp from "./pages/DownloadTemp";
import MainLogin from "./pages/MainLogin";
import DataCollection from "./pages/DataCollection";
import UploadData from "./pages/UploadData";
import NotReadyPage from "./pages/NotReadyPage";
import TagManager from "react-gtm-module"
import { useEffect } from "react";

const GTM_ID = 'GTM-T847NLT4'


function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, [])
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<MainLogin />} />
        <Route element={<ProtectedRoute />}>

          <Route path="/" element={<HomePage />} />
          <Route path="/dataCollection" element={<DataCollection />} />
          <Route path="/reportDashboard" element={<NotReadyPage />} />
          <Route path="/userManagement" element={<NotReadyPage />} />
          <Route path="/otherSection" element={<NotReadyPage />} />
          <Route path="/downloadtemplate" element={<DownloadTemp />} />
          <Route path="/uploaddata" element={<UploadData />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;

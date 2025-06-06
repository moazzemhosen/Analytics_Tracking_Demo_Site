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
import AnalyticsTrackingData from "./pages/AnalyticsTrackingData";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import IframeVideo from "./pages/IframeVideo";
import CookieBanner from "./components/CookieBanner";

const GTM_ID = 'GTM-P7LJTG7'
//GTM-P7LJTG7- Personal Access
//'GTM-T847NLT4'--Multiple Access
//Analytics-G-SQGQFLXEBS Personal
//Analytics-G-XXXXXXXXXX Multiple Access



function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, [])
  return (
    <>
    <CookieBanner/>
      <Router>
        <Routes>
          <Route path="/login" element={<MainLogin />} />
          <Route element={<ProtectedRoute />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/dataCollection" element={<DataCollection />} />

            <Route path="/aboutanalytics" element={<IframeVideo />} />
            <Route path="/userManagement" element={<NotReadyPage />} />
            <Route path="/otherSection" element={<NotReadyPage />} />
            <Route path="/downloadtemplate" element={<DownloadTemp />} />
            <Route path="/uploaddata" element={<UploadData />} />
            <Route path="/analytics" element={<AnalyticsTrackingData />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

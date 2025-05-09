import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaCookieBite } from "react-icons/fa"; // install react-icons if not yet

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showReopenButton, setShowReopenButton] = useState(false);

  useEffect(() => {
    const cookieValue = Cookies.get("cookievalue");
    if (!cookieValue) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowReopenButton(true);
    }
  }, []);

  const handleChoice = (value) => {
    Cookies.set("cookievalue", value, { expires: 0.0208 }); // 30 min
    setVisible(false);
    document.body.style.overflow = "";
    setShowReopenButton(true);
    window.location.reload();
  };

  const handleReopen = () => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  };

  if (!visible && !showReopenButton) return null;

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-sm bg-white/30">
          <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 bg-white text-gray-800 p-6 rounded-t-2xl shadow-lg animate-slide-up">
            <h2 className="text-lg font-semibold mb-2">🍪 We use cookies!</h2>
            <p className="mb-4 text-sm">
              We use cookies to improve your experience on our site. You can accept or reject tracking.
            </p>
            <div className="flex justify-end gap-4">
              <button
              id="F"
                onClick={() => handleChoice("2")}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-sm"
              >
                Reject
              </button>
              <button
              id="T"
                onClick={() => handleChoice("1")}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {showReopenButton && !visible && (
        <button
          onClick={handleReopen}
          className="fixed bottom-4 left-4 z-40 p-3 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition"
          title="Change cookie preferences"
        >
          <FaCookieBite className="text-xl text-gray-700" />
        </button>
      )}
    </>
  );
};

export default CookieBanner;

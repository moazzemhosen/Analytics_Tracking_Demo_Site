import React, { useState } from 'react'
import { TbMessageChatbotFilled } from 'react-icons/tb';

const Float = () => {
const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    setShowForm(false);
    setText('');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // hide popup after 3 sec
  };
  return (
    <>
     {/* Floating Button */}
<div
  className="fixed bottom-6 right-6 sm:bottom-4 sm:right-4 bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-lg z-50"
  onClick={() => setShowForm(!showForm)}
  id="Cb"
>
  <TbMessageChatbotFilled className="h-10 w-10" />
</div>

{/* Floating Form */}
{showForm && (
  <div className="fixed bottom-20 right-6 sm:bottom-16 sm:right-4 bg-white shadow-lg p-4 rounded-xl z-50 w-72 sm:w-64 md:w-80">
    <textarea
      className="w-full p-2 border border-gray-300 rounded mb-2"
      placeholder="Enter your message..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button
      className="w-full bg-blue-600 text-white py-2 rounded"
      onClick={handleSubmit}
      id="fs"
    >
      Submit your Request
    </button>
  </div>
)}

{/* Popup */}
{showPopup && (
  <div className="fixed bottom-36 right-6 sm:bottom-32 sm:right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg z-50">
    Request sent!
  </div>
)}

    </>
  )
}

export default Float
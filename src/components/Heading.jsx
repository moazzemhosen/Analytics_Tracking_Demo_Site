import React, { useEffect, useState } from 'react'
import { FaHandsClapping } from 'react-icons/fa6';

const Heading = () => {
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          const email = parsedUser.username;
          const namePart = email.split("@")[0]; // get 'name' from 'name@gmail.com'
          const capitalized =
            namePart.charAt(0).toUpperCase() + namePart.slice(1);
          setDisplayName(capitalized);
        } catch (error) {
          console.error("Error parsing user from session storage:", error);
        }
      }
    }, []);
  return (
    <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-sky-900">
        Hello, {displayName}
      </h1>
      <h2 className="text-base sm:text-lg text-gray-600">
        Welcome
      </h2>
    </div>
  </div>
  
  )
}

export default Heading
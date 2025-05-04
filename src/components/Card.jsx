import React from 'react'
import Hcard from '../pages/Hcard';

const Card = () => {
    const cards = [
        { "Name": "Data Collection", "Details": "Gather all media data templates, upload the raw templates, conduct a sanity check to validate their structure and content, and review the mapping to ensure accurate field correspondence with our system.", "link": "/dataCollection", },
        { "Name": "Reports & Dashboard", "Details": "A summary of findings, analysis of data trends, recommendations for action, and an open forum for team feedback and collaboration.", "link": "/reportDashboard" },
        { "Name": "User Management", "Details": "Creating, updating, and deleting user accounts, managing roles and permissions, and ensuring data security and compliance.", "link": "/userManagement" },
        { "Name": "Other Section", "Details": "Includes additional information and resources relevant to users that do not fit into the main categories.", "link": "/otherSection" },
    ]


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4 sm:p-10 md:p-16 lg:p-20">
            {cards.map((card, idx) => (
                <Hcard key={idx} data={card} id={idx} />
            ))}
        </div>
    )
}

export default Card;
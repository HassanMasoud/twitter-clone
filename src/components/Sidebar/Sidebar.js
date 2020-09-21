import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </div>
        </div>
    )
}

export default Sidebar;
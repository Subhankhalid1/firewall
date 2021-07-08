import React from 'react';

const TabDetail = ({ heading, detail }) => {
    return (
        <div className="mt-4">
            <h3 className="text-muted">{heading}</h3>
            <span className="text-muted detail-text">{detail}</span>
        </div>
    )
}

export default TabDetail;

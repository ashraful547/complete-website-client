import React from 'react';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h3>{info.title}</h3>
                <h3>{info.amount}</h3>
                <h6>{info.detail}</h6>
            </div>
        </div>
    );
};

export default InfoCard;
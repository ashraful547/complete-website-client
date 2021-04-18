import React from 'react';

const TestimonialCard = ({info}) => {
    return (
        <div className="col-md-4">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h3>{info.name}</h3>
                
                <h6>{info.detail}</h6>
            </div>
        </div>
    );
};

export default TestimonialCard;
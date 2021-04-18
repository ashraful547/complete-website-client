import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
const infosData = [
    {
        title:'apple',
        amount: '$299',
        detail: 'lorem ipsum dolor sit amet'

    },
    {
        title:'android',
        amount: '$119',
        detail: 'lorem ipsum dolor sit amet'

    },
    {
        title:'feature',
        amount: '$59',
        detail: 'lorem ipsum dolor sit amet'

    }
]

const PhoneInfo = () => {
    return (
        <section className="row">
            {
                infosData.map((info) => <InfoCard info={info} ></InfoCard>)
            }
        </section>
    );
};

export default PhoneInfo;
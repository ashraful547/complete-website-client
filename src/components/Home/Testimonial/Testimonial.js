import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const TestimonialInfosData = [
    {
        name:'dev patel',
        
        detail: 'lorem ipsum dolor sit amet'

    },
    {
        name:'dev patel',
        
        detail: 'lorem ipsum dolor sit amet'

    },
    {
        name:'dev patel',
        
        detail: 'lorem ipsum dolor sit amet'

    }
]

const Testimonial = () => {
    return (
        <section className="row">
        {
            TestimonialInfosData.map((info) => <TestimonialCard info={info}></TestimonialCard> ) 
        }
        </section>
    );
};

export default Testimonial;
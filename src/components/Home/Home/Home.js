import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import YourData from '../YourData/YourData';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Testimonial></Testimonial>
            <YourData></YourData>
            <Footer></Footer>
        </div>
    );
};

export default Home;
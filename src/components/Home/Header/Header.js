import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import PhoneInfo from '../PhoneInfo/PhoneInfo';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <PhoneInfo></PhoneInfo>
        </div>
    );
};

export default Header;
import React from 'react';
import BigMobile from '../../../images/landing-page-image-01.jpg'

const Services = () => {
    return (

<main className="row">
<div className="col-md-4 offset-md-1">
<h1>choose your <br/> phone independently</h1>
<p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem culpa similique dicta! Rerum, repellat totam.</p>
<h1 style={{color:'blue'}}>10000+</h1>
<h6>total service</h6>

              </div>
              <div className="col-md-6">
              <img src={BigMobile} alt="" className="img-fluid"/>    
              </div>
</main>
        
        
        
    );
};

export default Services;
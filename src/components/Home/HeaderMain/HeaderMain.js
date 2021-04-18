import React from 'react';
import Mobile from '../../../images/Mobiles.jpg'

const HeaderMain = () => {
    return (
        <main className="row">
              <div className="col-md-4 offset-md-1">
<h1>your new day <br/> starts here</h1>
<p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem culpa similique dicta! Rerum, repellat totam.</p>
<button className="btn btn-primary">
    click here
</button>

              </div>
              <div className="col-md-6">
              <img src={Mobile} alt="" className="img-fluid"/>    
              </div>
        </main>
    );
};

export default HeaderMain;
import React from 'react';

const YourData = () => {
    return (
        <div>
            <form className="container d-flex center bg-primary">
  <label>
    First Name:
    <input type="text" name="first-name" />
  </label>
  <label>
    Last Name:
    <input type="text" name="last-name" />
  </label>
  <label>
    Email Address:
    <input type="text" name="email-address" />
  </label>
  <label>
    Phone Number:
    <input type="text" name="phone-number" />
  </label>
  <label>
    Message:
    <input type="text" name="message" />
  </label>

  <input type="submit" value="Submit" />
</form>
<br/>
        </div>
    );
};

export default YourData;
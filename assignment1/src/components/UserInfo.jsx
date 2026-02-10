import React from 'react';

class UserInfo extends React.Component {
  render() {
    const name = 'Joel';
    const job = 'contractor';
    const number = (Math.floor(Math.random() * 10) +1);
    
    return (
    <div>
        <p>Name: {name}</p>
        <p>Profession: {job}</p>
        <p>Your Lucky Number is {number}!</p>
    </div>
    );
  }
}

export default UserInfo;
import React, { useEffect, useState } from "react";
import './UserCard.css'

function UserProfile(props) {
  const { userData,addCard } = props;

  const [isWindowBelow, setWindowBelow] = useState(window.innerWidth<810);

  useEffect( () => {
    window.addEventListener('resize', (event) => {

      setWindowBelow(event.target.innerWidth<810)
      
    })

  } , [])


  return (
    <div className="user-info" id="userField">
      <div className="profile-card">
        <img className="profile-pic" src={userData.userPhotoUrl} alt="" />
       
          {!isWindowBelow ? <>
            <div className="profile-info">
          <p className="inspire">{userData.inspirationQuoute}</p>
          <h3 className="name" >{userData.name}</h3>
          </div>
          </>
           : <h3 className="name" >{userData.name}</h3>}
          
       
      </div>
      <div className="buton-container">
              <button className="addBtn" onClick={addCard}  >Add Project</button>
      </div>
    </div>
  );
}

export default UserProfile;

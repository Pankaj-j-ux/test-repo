/** @format */

import { useNavigate } from "react-router-dom";

const ProfileUpdateBox = ({ setProfileAlert, profileData }) => {
  const navigate = useNavigate();
  return (
    <div className="profileupdatebox">
      <div className="innerbody">
        <p>WELCOME</p>
        <p>{profileData.uname}</p>
        <p>
          WE REQUEST YOU TO COMPLETE YOUR PROFILE FOR YOUR BETTER EXPERIENCE
        </p>
        <button
          onClick={() => {
            navigate("/profile");
          }}
        >
          Complete Now
        </button>
        <p onClick={() => setProfileAlert(false)}>skip it &gt;&gt;&gt;</p>
      </div>
    </div>
  );
};

export default ProfileUpdateBox;

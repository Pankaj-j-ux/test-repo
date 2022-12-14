/**
 * @format
 * @fmat
 */

import "./profile.css";

import { useEffect, useState } from "react";
import Loading from "../Landing/Loading";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/v1/getprofile", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!result.success) {
        setIsLoading(false);
        setProfileData(null);
      } else {
        setIsLoading(false);
        setProfileData(result.user);
      }
    }
    fetchData();

    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="mainprofile">
      <div className="photo">
        <img src={profileData.photo1} />
        {/* <p>{profileData.uname}</p> */}
        {/* <p>{profileData.email}</p> */}
      </div>
      <div className="detail">
        <p>{profileData.uname}</p>
        <p>{profileData.email}</p>
      </div>
    </div>
  );
};

export default Profile;

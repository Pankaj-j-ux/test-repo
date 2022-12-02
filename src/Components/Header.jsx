/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOverProfile, setOverProfile] = useState(false);
  const [isOverList, setOverList] = useState(false);

  useEffect(() => {
    if (isOverList || isOverProfile) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isOverList, isOverProfile]);

  const logoutHandler = async () => {
    const response = await fetch("http://localhost:5000/api/v1/logout", {
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.success) {
      console.log("yeahh!!");
      window.location.reload();
    } else {
      console.log("shit!!");
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <FontAwesomeIcon icon={faBars} />
          <Link to="/">BILL SPLITTER</Link>
        </div>
        <div className="setting">
          <div className="features">
            <div className="notification">
              <p>1</p>
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
          <div
            className="profile"
            onMouseEnter={() => {
              setOverProfile(true);
            }}
            onMouseLeave={() => {
              setOverProfile(false);
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </div>
          {isOpen && (
            <ul
              className="dropdown"
              onMouseEnter={() => {
                setOverList(true);
              }}
              onMouseLeave={() => {
                setOverList(false);
              }}
            >
              <li>
                <FontAwesomeIcon icon={faGear} /> <span>Profile</span>{" "}
              </li>
              <button onClick={logoutHandler} className="logout-btn">
                Log Out
              </button>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

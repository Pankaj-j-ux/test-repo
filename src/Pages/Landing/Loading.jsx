/** @format */

import "./loading.css";

import image from "../../Assets/Images/1492.gif";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  navigate("/");

  return (
    <div className="loading">
      <img src={image} alt="loader" />
    </div>
  );
};

export default Loading;

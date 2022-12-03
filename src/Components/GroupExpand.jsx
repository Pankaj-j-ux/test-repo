/** @format */
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";

const GroupExpand = () => {
  const [data, setData] = useState("");
  const { gid } = useParams();
  useEffect(() => {
    console.log(gid);
  }, []);

  return (
    <>
      <div className="groupexpand">
        {gid ? <div className="adduser_btn">+</div> : <div></div>}
      </div>
    </>
  );
};

export default GroupExpand;

/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import GroupExpand from "../../Components/GroupExpand";
import CreateGroupCard from "../../Components/CreateGroupCard";

const Dashboard = () => {
  const [groupData, setGroupData] = useState([]);
  const [groupNum, setGroupNum] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/v1/dashboard", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      // console.log(result);

      setGroupData(result.groups);

      if (!result.success) {
        navigate("/auth");
      }
    }
    fetchData();
  }, []);

  const changeGroupNum = (num) => {
    setGroupNum(num);
  };

  return (
    <>
      <div className="dashboard">
        <CreateGroupCard />
        <Header />
        <div className="dashboard-body">
          <Sidebar groupData={groupData} changeGroupNum={changeGroupNum} />
          <GroupExpand groupNum={groupNum} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

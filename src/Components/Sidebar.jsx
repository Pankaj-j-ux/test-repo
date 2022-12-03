/** @format */

import GroupCard from "./GroupCard";

const Sidebar = ({ groupData, changeGroupNum, setOpenCreateGroup }) => {
  return (
    <>
      <div className="sidebar">
        <div className="deign1">
          <button
            className="addgroup-btn"
            onClick={() => setOpenCreateGroup(true)}
          >
            <span> CREATE NEW GROUP </span> <span> +</span>
          </button>
        </div>
        <div className="groups">
          {groupData.map((obj, index) => {
            return (
              <GroupCard
                key={index}
                gid={obj.id}
                gname={obj.gname}
                createdat={obj.Created_at}
                changeGroupNum={changeGroupNum}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

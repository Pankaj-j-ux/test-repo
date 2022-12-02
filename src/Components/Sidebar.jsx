/** @format */

import GroupCard from "./GroupCard";

const Sidebar = ({ groupData, changeGroupNum }) => {
  console.log(groupData);
  return (
    <>
      <div className="sidebar">
        <button className="addgroup-btn">
          <span> CREATE NEW GROUP </span> <span> +</span>
        </button>
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
    </>
  );
};

export default Sidebar;

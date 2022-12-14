/** @format */

import GroupCard from "./GroupCard";

const Sidebar = ({
  groupData,
  setOpenCreateGroup,
  isExtendedSidebar,
  profileData,
}) => {
  return (
    <>
      <div
        className="sidebar"
        style={{
          width: isExtendedSidebar ? "280px" : "80px",
          // height: !(profileData.photo1 && profileData.contact)
          //   ? "86.5vh"
          //   : "90.1vh",
        }}
      >
        <div className="deign1">
          <button
            className="addgroup-btn"
            onClick={() => setOpenCreateGroup(true)}
          >
            {isExtendedSidebar && <span className=""> CREATE NEW GROUP </span>}
            <span className="addgroupclass"> +</span>
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
                isExtendedSidebar={isExtendedSidebar}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

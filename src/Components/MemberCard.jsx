/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MemberCard = ({
  membername,
  memberid,
  memberemail,
  membercontact,
  photo,
  profileData,
  groupInfo,
}) => {
  return (
    <div className="membercard">
      <div className="content1">
        {photo ? (
          <div className="DP">
            <img src={photo} alt="DP" />
          </div>
        ) : (
          <div className="DP">
            <FontAwesomeIcon icon={faUser} />
          </div>
        )}
        <div className="content">
          <dir className="title">{membername}</dir>
          <div className="subtitle">
            <p>{memberemail}</p>
            <p>{membercontact}</p>
          </div>
        </div>
      </div>
      {memberid === groupInfo.admin1 ? (
        <div className="admin">Group Admin</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MemberCard;

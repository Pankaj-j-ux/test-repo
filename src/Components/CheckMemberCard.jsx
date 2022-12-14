/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const CheckMemberCard = ({
  membername,
  memberid,
  memberemail,
  membercontact,
  photo,
  changeHandler,
}) => {
  return (
    <div className="outer-checkmembercard">
      <label className="checkmembercard" htmlFor={`checkbox${memberid}`}>
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
        <input
          type="checkbox"
          name="member_include"
          value={`${memberid}`}
          id={`checkbox${memberid}`}
          onChange={changeHandler}
        />
      </label>
    </div>
  );
};

export default CheckMemberCard;

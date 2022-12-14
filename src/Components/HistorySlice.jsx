/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGripVertical, faUser } from "@fortawesome/free-solid-svg-icons";
const HistorySlice = ({ curr }) => {
  return (
    <>
      <div className="billcard">
        <div className="category">
          <p>{curr.category.toUpperCase()}</p>
          <p>
            <FontAwesomeIcon icon={faGripVertical} />
            {curr.disc.length > 15
              ? curr.disc.substring(0, 15) + "..."
              : curr.disc}
          </p>
        </div>
        <div className="amount">
          <p>₹ {curr.amn}</p>
          <p>
            Mentioned On:{" "}
            <span>{new Date(curr.Created_at).toDateString()}</span>
          </p>
        </div>
        <span className="billcard_tooltip">
          {curr.photo1 ? (
            <div className="DP">
              <img src={curr.photo1} alt="DP" />
            </div>
          ) : (
            <div className="DP">
              <FontAwesomeIcon icon={faUser} />
            </div>
          )}
          <div className="mentionedby">
            <p>
              <span>Paid By: </span>
              {curr.uname}
            </p>
            <p>{curr.email}</p>
          </div>
        </span>
      </div>
    </>
  );
};

export default HistorySlice;

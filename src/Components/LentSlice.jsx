/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGripVertical, faUser } from "@fortawesome/free-solid-svg-icons";

const LentSlice = ({ curr }) => {
  return (
    <>
      <div className="oweslice">
        <div className="profile12">
          {curr.photo1 ? (
            <div className="DP">
              <img src={curr.photo1} alt="DP" />
            </div>
          ) : (
            <div className="DP">
              <FontAwesomeIcon icon={faUser} />
            </div>
          )}
          <span>
            <p>{curr.uname}</p>

            <p>{curr.email}</p>
          </span>
        </div>

        <div className="amount">
          <p>
            <span> You Lent: </span>
            <div style={{ color: "rgb(10, 221, 10)" }}>₹ {curr.lent}</div>
          </p>
        </div>
      </div>
    </>
  );
};

export default LentSlice;

/** @format */

import { NavLink } from "react-router-dom";

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

const color = generateRandomColor();

const GroupCard = ({ gid, gname, createdat, changeGroupNum }) => {
  const letter = gname.charAt(0).toUpperCase();
  createdat = new Date(createdat).toDateString();
  return (
    <NavLink to={`dashboard/${gid}`} onClick={() => changeGroupNum(gid)}>
      <div className="groupcard">
        <div className="card-img" style={{ backgroundColor: color }}>
          {letter}
        </div>
        <div className="card-body">
          <div className="card-title">{gname}</div>
          <div className="card-date">{createdat}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default GroupCard;

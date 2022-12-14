/** @format */

import LentSlice from "./LentSlice";

const LentCard = ({ lentData }) => {
  console.log("LENT", lentData);
  return (
    <div className="owecard setlent">
      <h3>You Lent</h3>
      <div className="owecard_inner">
        <div className="oweslices">
          {lentData.map((curr, index) => {
            if (curr.lent !== 0) {
              return <LentSlice key={index} curr={curr} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default LentCard;

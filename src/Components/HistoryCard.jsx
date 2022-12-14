/** @format */

import HistorySlice from "./HistorySlice";

const HistoryCard = ({ billHistory }) => {
  return (
    <div className="historycard sethistory">
      <h3>Bills History</h3>
      <div className="historycard_inner">
        <div className="billcards">
          {billHistory.map((curr, index) => {
            return <HistorySlice key={index} curr={curr} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;

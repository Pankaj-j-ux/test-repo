/** @format */

import OweSlice from "./OweSlice";

const OweCard = ({ oweData }) => {
  console.log("OWE", oweData);
  return (
    <div className="owecard setowe">
      <h3>You OWE</h3>
      <div className="owecard_inner">
        <div className="oweslices">
          {oweData.map((curr, index) => {
            if (curr.owe !== 0) {
              return <OweSlice key={index} curr={curr} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OweCard;

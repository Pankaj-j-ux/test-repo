/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <div className="loader">
      <span className="rotate1">
        {" "}
        <FontAwesomeIcon icon={faSpinner} />
      </span>
      {/* <span className="rotate2">|</span> */}
    </div>
  );
};

export default Loader;

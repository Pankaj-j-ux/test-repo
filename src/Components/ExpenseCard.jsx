/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPeopleGroup,
  faFileInvoiceDollar,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const ExpenseCard = ({
  expense,
  noOfBills,
  noOfMembers,
  groupName,
  totalExpense,
}) => {
  return (
    <div className="expensecard">
      <h3>{groupName} </h3>
      <p>
        <FontAwesomeIcon icon={faPeopleGroup} />
        Members :<span>{noOfMembers} </span>
      </p>
      <p>
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
        Bills :<span>{noOfBills} </span>
      </p>
      <p>
        <FontAwesomeIcon icon={faWallet} />
        Expense :<span>₹ {totalExpense ? totalExpense : 0}</span>
      </p>
    </div>
  );
};

export default ExpenseCard;

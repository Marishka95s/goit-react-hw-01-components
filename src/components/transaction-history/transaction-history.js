import React from "react";
import PropTypes from 'prop-types';
import TransactionHistoryItem from './transaction-history-item';

const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>

    <tbody>
    {items.map(({ type, amount, currency, id }) => (
        <tr key={id} className="table-body-item">
          <TransactionHistoryItem 
            type={type} 
            amount={amount} 
            currency={currency} />
        </tr>
        )
    )}
    </tbody>
    </table>
    )

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default TransactionHistory;
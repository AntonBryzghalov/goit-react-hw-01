function TransactionRecord({ transaction }) {
  return (
    <>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </>
  );
}

export default TransactionRecord;

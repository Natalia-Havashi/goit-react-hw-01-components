import { Column, ColumnName, TransactionTable, Value } from "./TransactionHistory.styled"

export const Transactions = ({ items }) => {
   return (
    <TransactionTable>
  <thead>
    <ColumnName>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </ColumnName>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
     <Column key={id}>
      <Value>{type}</Value>
      <Value>{amount}</Value>
      <Value>{currency}</Value>
    </Column>
    ))}
   
    
  </tbody>
</TransactionTable>
   )
}
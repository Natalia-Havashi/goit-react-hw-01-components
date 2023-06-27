import styled from 'styled-components';

export const TransactionTable = styled.table `
border: 2px solid green;
border-radius: 8px;
width: 400px;
border-collapse: collapse;
`
export const ColumnName = styled.tr `
color: black;
text-align: center;
font-size: 18px;
background-color: #eff0f2;
`

export const Column = styled.tr `
color: black;
font-size: 18px;
text-align: center;
`

export const Value = styled.td `
color: black;
font-size: 18px;
padding: 12px 24px;
text-align: center;
border: 1px solid black;
`
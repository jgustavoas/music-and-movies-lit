import { css } from 'lit';

export default css`
  table {
    width: 100%;
    text-align: left;
    border: 1px solid #999;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #999;
    padding: 8px;
    text-transform: capitalize;
  }

  th button {
    float: right;
  }
`;

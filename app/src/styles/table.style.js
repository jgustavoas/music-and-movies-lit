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
  }

  th:last-of-type,
  td:last-of-type {
    text-align: center;
  }
`;
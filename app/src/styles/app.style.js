import { css } from 'lit';

export default css`
  :host {
    min-height: 100vh;
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    color: #1a2b42;
    margin: 0 auto;
    padding: 16px 0;
    text-align: center;
    gap: 16px;
  }

  header {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: baseline;
  }

  header h1 {
    margin: 0 0 0 32px;
  }

  nav {
    display: inline-flex;
    gap: 16px;
    margin-left: 32px;
    padding: 0;
  }

  main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
  }

  main h2 {
    font-size: 32px;
    margin: 16px 0 16px 32px;
  }

  main button {
    font-size: inherit;
  }

  main div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main div button {
    margin-right: 32px;
  }

  table {
    width: calc(100% - 64px);
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

  footer {
    font-size: medium;
    height: 32px;
    display: flex;
    align-items: center;
  }
`;

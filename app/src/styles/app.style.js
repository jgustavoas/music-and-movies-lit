import { css } from 'lit';
import tableStyle from './table.style';

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
    background-color: #fff;
    margin: 0 auto;
    padding: 0 16px;
    text-align: center;
    gap: 16px;
  }

  header {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: flex-end;
  }

  header h1 {
    margin: 0;
  }

  nav {
    display: inline-flex;
    gap: 16px;
    margin-left: 32px;
    padding: 0;
    flex: 1;
  }

  aside {
    display: flex;
  }
  aside select {
    margin-right: 8px;
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
    margin: 16px 0;
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

  ${tableStyle}

  footer {
    font-size: medium;
    height: 32px;
    display: flex;
    align-items: center;
  }
`;

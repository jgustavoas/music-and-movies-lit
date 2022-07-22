import { html } from 'lit';

export default (text, evClick) =>
  html` <button id="btn_${text}" @click=${evClick}>${text}</button> `;

export const sortButtons = column => html`
  <button id="btn_sort-desc" title="Sort ${column} descending">▾</button>
  <button id="btn_sort-asc" title="Sort ${column} ascending">▴</button>
`;

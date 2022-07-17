import { html } from 'lit';

export default (text, evClick) =>
  html` <button id="btn_${text}" @click=${evClick}>${text}</button> `;

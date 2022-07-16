import { html } from 'lit';
import tableTemplate from './table.template';
import button from './button.template';

export default (table, data) => {
  if (!table) {
    return html`
      <h2>Welcome!</h2>
      <p>Navigate using the menu or use the search field.</p>
    `;
  }

  return html`
    <div>
      <h2>${table}</h2>
      ${button('New artist')}
    </div>

    ${tableTemplate(data)}
  `;
};

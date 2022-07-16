import { html } from 'lit';
import tableTemplate from './table.template';
import button from './button.template';

export default (screen, data) => {
  if (screen === 'Home') {
    return html`
      <h2>Welcome!</h2>
      <p>Navigate using the menu or use the search field.</p>
    `;
  }

  return html`
    <div>
      <h2>${screen}</h2>
      ${button(`New ${screen.slice(0, -1).toLowerCase()}`)}
    </div>

    ${tableTemplate(data)}
  `;
};

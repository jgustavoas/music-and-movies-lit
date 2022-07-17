import { html } from 'lit';

export default (screen, data) => {
  if (!data) return null;
  if (data.length === 0) return html`<h2>Sorry! Nothing was found :(</h2>`;

  const rows = data.map(
    column =>
      html`
        <tr>
          <td>${column[screen.slice(0, -1).toLowerCase()]}</td>
          <td>Edit | Delete</td>
        </tr>
      `
  );

  return html`
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};

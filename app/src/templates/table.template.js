import { html } from 'lit';

export default data => {
  if (!data) return null;

  const rows = data.map(
    column =>
      html`
        <tr>
          <td>${column.artist}</td>
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

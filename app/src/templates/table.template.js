import { html } from 'lit';
import screensObj from '../objects/screens.obj';

export default (screen, data) => {
  if (!data) return null;
  if (data.length === 0) return html`<h2>Sorry! Nothing was found :(</h2>`;

  const model = screensObj.find(obj => obj.screen === screen);
  const mainColumn = screen.slice(0, -1).toLowerCase();
  const columns = [mainColumn, ...model.associations];

  const tr = data.map(row => {
    const associatedColumns = model.associations.map(
      column => html`<td>${row[column][column]}</td>` // 1
    );

    return html`
      <tr>
        <td>${row[mainColumn]}</td>
        ${associatedColumns}
        <td>Edit | Delete</td>
      </tr>
    `;
  });

  return html`
    <table>
      <thead>
        <tr>
          ${columns.map(column => html`<th>${column}</th>`)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${tr}
      </tbody>
    </table>
  `;
};

/*
  1) The reason why using this "row[column][column]" pattern for associated columns is because...
     ...included models are returned by the API as objects.

     In the following row example "genre" is a included model in "artists" model:
    {
      "artist": "AC/DC",
      "genre": { "genre": "Rock" }
    }
*/

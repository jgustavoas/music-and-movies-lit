import { html } from 'lit';
import screensObj from '../objects/screens.obj';

function tdTemplate(columns, th) {
  const sortButtons = col => html`
    <button id="btn_sort-desc" title="Sort ${col} descending">▾</button>
    <button id="btn_sort-asc" title="Sort ${col} ascending">▴</button>
  `;

  const template = columns.map(col =>
    th ? html`<th>${col} ${sortButtons(col)}</th>` : html`<td>${col}</td>`
  );

  return template;
}

function trTemplate(data, columns) {
  const template = data.map(row => {
    const cols = columns.map(
      (column, i) => (i === 0 ? row[column] : row[column][column]) // 1
    );

    return html`
      <tr>
        ${tdTemplate(cols)}
      </tr>
    `;
  });

  return template;
}

export default (screen, data) => {
  if (!data) return null;
  if (data.length === 0) return html`<h2>Sorry! Nothing was found :(</h2>`;

  const model = screensObj.find(obj => obj.screen === screen);
  const { columns } = model;

  return html`
    <table>
      <thead>
        <tr>
          ${tdTemplate(columns, true)}
        </tr>
      </thead>
      <tbody>
        ${trTemplate(data, columns)}
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

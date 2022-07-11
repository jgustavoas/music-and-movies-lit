import { LitElement, html } from 'lit';
import appStyle from './styles/app.style';

class App extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      rows: { type: Object },
    };
  }

  static get styles() {
    return appStyle;
  }

  constructor() {
    super();
    this.title = 'Music and Movies';
    this.rows = [];
  }

  async connectedCallback() {
    super.connectedCallback();

    const rows = await fetch('http://localhost:3000/artists?by=artist')
      .then(response => response.json())
      .then(data => data);

    this.rows = rows.map(
      column =>
        html`<tr>
          <td>${column.artist}</td>
          <td>Edit | Delete</td>
        </tr>`
    );
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
        <ul>
          <li>Artists</li>
          <li>Albums</li>
          <li>Tracks</li>
          <li>Movies</li>
          <li>Genres</li>
        </ul>
      </header>

      <main>
        <div>
          <h2>Artists</h2>
          <button>New artist</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            ${this.rows}
          </tbody>
        </table>
      </main>

      <footer>
        App made with&nbsp;<a href="https://lit.dev/" target="_blank">Lit</a>
      </footer>
    `;
  }
}

customElements.define('app-mm', App);

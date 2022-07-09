import { LitElement, html, css } from 'lit';

class App extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      rows: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.5rem;
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
        gap: 16px;
      }

      header {
        background-color: #ededed;
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
      }

      header h1 {
        margin: 0 0 0 32px;
      }

      header ul {
        display: inline-flex;
        list-style-type: none;
        gap: 16px;
        margin-left: 32px;
        padding: 0;
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
        margin: 16px 0 16px 32px;
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

      main div button {
        margin-right: 32px;
      }

      table {
        width: calc(100% - 64px);
        text-align: left;
        border: 1px solid #999;
        border-collapse: collapse;
      }

      th,
      td {
        border: 1px solid #999;
        padding: 8px;
      }

      th:last-of-type,
      td:last-of-type {
        text-align: center;
      }

      footer {
        font-size: medium;
        height: 32px;
        display: flex;
        align-items: center;
      }
    `;
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

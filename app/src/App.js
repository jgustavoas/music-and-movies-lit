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
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
          ${column.artist}
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
        <h2>Artists</h2>
        <table>
          ${this.rows}
        </table>
      </main>

      <footer>
        App made with&nbsp;<a href="https://lit.dev/" target="_blank">Lit</a>
      </footer>
    `;
  }
}

customElements.define('app-mm', App);

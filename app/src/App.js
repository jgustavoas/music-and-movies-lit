import { LitElement, html } from 'lit';
import appStyle from './styles/app.style';
import tableTemplate from './templates/table.template';

class App extends LitElement {
  static get properties() {
    return {
      tableName: { type: String },
      data: { type: Object },
    };
  }

  static get styles() {
    return appStyle;
  }

  constructor() {
    super();
    this.tableName = 'Artists';
    this.data = null;
  }

  async connectedCallback() {
    super.connectedCallback();

    this.data = await fetch('http://localhost:3000/artists?by=artist')
      .then(response => response.json())
      .then(data => data);
  }

  render() {
    return html`
      <header>
        <h1>Music and Movies</h1>
        <nav>
          <button>Artists</button>
          <button>Albums</button>
          <button>Tracks</button>
          <button>Movies</button>
          <button>Genres</button>
        </nav>
      </header>

      <main>
        <div>
          <h2>${this.tableName}</h2>
          <button>New artist</button>
        </div>

        ${tableTemplate(this.data)}
      </main>

      <footer>
        App made with&nbsp;<a href="https://lit.dev/" target="_blank">Lit</a>
      </footer>
    `;
  }
}

customElements.define('app-mm', App);

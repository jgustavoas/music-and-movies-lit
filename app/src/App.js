import { LitElement, html } from 'lit';
import appStyle from './styles/app.style';
import contentTemplate from './templates/content.template';

class App extends LitElement {
  static get properties() {
    return {
      screen: { type: String },
      tableName: { type: String },
      data: { type: Object },
      content: { type: Object },
    };
  }

  static get styles() {
    return appStyle;
  }

  constructor() {
    super();
    this.screen = 'Home';
    this.tableName = 'Artists';
    this.data = null;
    this.content = null;
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

        <aside>
          <input type="text" name="" id="" />
          <select>
            <option value="">Artist</option>
            <option value="">Album</option>
            <option value="">Track</option>
            <option value="">Movie</option>
            <option value="">Genre</option>
          </select>
          <button>Search</button>
        </aside>
      </header>

      <main>${contentTemplate(this.tableName, this.data)}</main>

      <footer>
        App made with&nbsp;<a href="https://lit.dev/" target="_blank">Lit</a>
      </footer>
    `;
  }
}

customElements.define('app-mm', App);

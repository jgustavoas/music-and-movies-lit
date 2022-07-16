import { LitElement, html } from 'lit';
import appStyle from './styles/app.style';
import contentTemplate from './templates/content.template';
import button from './templates/button.template';

class App extends LitElement {
  static get properties() {
    return {
      screen: { type: String },
      tableName: { type: String },
      data: { type: Object },
      content: { type: Object },
      navButtons: { type: Object },
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
    this.navButtons = [];
  }

  async connectedCallback() {
    super.connectedCallback();

    const tables = ['Artists', 'Albums', 'Tracks', 'Movies', 'Genres'];
    this.navButtons = tables.map(table => button(table));

    this.data = await fetch('http://localhost:3000/artists?by=artist')
      .then(response => response.json())
      .then(data => data);
  }

  render() {
    return html`
      <header>
        <h1>Music and Movies</h1>

        <nav>${this.navButtons}</nav>

        <aside>
          <input type="text" name="" id="" />
          <select>
            <option value="">Artist</option>
            <option value="">Album</option>
            <option value="">Track</option>
            <option value="">Movie</option>
            <option value="">Genre</option>
          </select>

          ${button('Search')}
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

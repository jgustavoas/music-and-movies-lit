import { LitElement, html } from 'lit';
import appStyle from './styles/app.style';
import contentTemplate from './templates/content.template';
import button from './templates/button.template';
import screens from './objects/screens.obj';
import { navigate } from './functions/button.func';

class App extends LitElement {
  static get properties() {
    return {
      screen: { type: String },
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
    this.data = null;
    this.content = null;
    this.navButtons = screens.map(screen => button(screen.screen, navigate));
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <header>
        <button id="btn_Home" @click=${navigate}>Music and Movies</button>

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

      <main>${contentTemplate(this.screen, this.data)}</main>

      <footer>
        App made with&nbsp;<a href="https://lit.dev/" target="_blank">Lit</a>
      </footer>
    `;
  }
}

customElements.define('app-mm', App);

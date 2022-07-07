import { LitElement, html, css } from 'lit';

class App extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--app-mm-background-color);
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Music and Movies';
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
      </main>

      <p class="app-footer">
        App made with
        <a href="https://lit.dev/" target="_blank">Lit</a>
      </p>
    `;
  }
}

customElements.define('app-mm', App);

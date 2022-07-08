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
        margin-left: 32px;
      }

      main {
        flex-grow: 1;
        display: flex;
        align-items: center;
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
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
      </header>

      <main>Main content goes here</main>

      <footer>
        App made with <a href="https://lit.dev/" target="_blank">Lit</a>
      </footer>
    `;
  }
}

customElements.define('app-mm', App);

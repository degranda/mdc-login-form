import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="bundle-login.css">
<form action="home.html">
    <div class="mdc-text-field username">
      <input type="text" class="mdc-text-field__input" id="username-input" name="username" required>
      <label class="mdc-floating-label" for="username-input"><slot name="user"></slot></label>
      <div class="mdc-line-ripple"></div>
    </div>
    <div class="mdc-text-field password">
      <input type="password" class="mdc-text-field__input" id="password-input" name="password" required minlength="8">
      <label class="mdc-floating-label" for="password-input"><slot name="password"></slot></label>
      <div class="mdc-line-ripple"></div>
    </div>
    <div class="button-container">
      <button type="button" class="mdc-button cancel">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">
            <slot name="secundary"></slot>
        </span>
      </button>
      <button class="mdc-button mdc-button--raised next">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">
          <slot name="main"></slot>
        </span>
      </button>
    </div>
  </form>
`;

class mdcLoginForm extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.username = new MDCTextField(this.shadowRoot.querySelector('.username'));
        this.password = new MDCTextField(this.shadowRoot.querySelector('.password'));

        new MDCRipple(this.shadowRoot.querySelector('.cancel'));
        new MDCRipple(this.shadowRoot.querySelector('.next'));
    }
}

customElements.define('mdc-login-form', mdcLoginForm);
import "./index.js";
import { html } from "lit-html";

import("./a.js").then((module) => {
  customElements.define("cc-a", module.default);
});

export const story1 = () => html` <my-counter></my-counter> `;

export const a = () => html`<cc-a />`;

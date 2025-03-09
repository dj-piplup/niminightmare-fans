import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { socials } from "./social-json.ts";

@customElement("nimi-socials")
export class NimiSocials extends LitElement {
  renderSocial({ title, icon, link, color, fontColor, hover }: Social) {
    return html`<a
      class="social-link"
      style=${`--social-bg:${color}; --social-text: ${fontColor}; --social-hover:${hover}`}
      href=${link}
      >${icon}<span>${title}</span></a
    >`;
  }
  render() {
    return html` <h2>Check out Nimi</h2>
      <div>${map(socials, this.renderSocial)}</div>`;
  }

  static styles = [
    css`
      :host {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        & > div {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
        }
      }
      h2 {
        margin: 0;
      }
      .social-link {
        height: 2em;
        width: 11ch;
        display: grid;
        grid-template-columns: 1em 1fr;
        padding-inline: 1em;
        padding-block: 0.25em;
        border-radius: 1.25em;
        grid-auto-flow: column;
        column-gap: 1em;
        align-items: center;
        background-color: var(--social-bg);
        color: var(--social-text);
        text-decoration: none;
        transition: scale 250ms;
        cursor: pointer;
        font-size: 1.2rem;
        svg {
          height: 1em;
          width: 1em;
          stroke: var(--social-text);
          fill: var(--social-text);
        }
        span {
          text-align: start;
        }
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--social-bg),
            var(--social-hover) 20%
          );
          scale: 1.05;
        }
      }
    `,
  ];
}

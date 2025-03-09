import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { projects } from "./project-json.ts";

@customElement("nimi-projects")
export class NimiSocials extends LitElement {
  renderNoProjects() {
    return html`<p>Coming soon</p>`;
  }
  renderProject() {
    // Nothing here yet
  }
  render() {
    return html`<h2>Projects we host</h2>
      <section class=${projects.length === 0 ? "empty" : ""}>
        ${projects.length > 0
          ? map(projects, this.renderProject)
          : this.renderNoProjects()}
      </section>`;
  }

  static styles = [
    css`
      :host {
        display: grid;
        grid-template-rows: 2rem 1fr;
        row-gap: 1rem;
        align-items: center;
        width: 100%;
        max-width: 1000px;
      }
      h2 {
        width: 100%;
        text-align: center;
      }
      section {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: 100%;
        border: 1px solid #ddcccc;
        border-radius: 0.25rem;
        height: 100%;
        &.empty {
          place-content: center;
        }
      }
    `,
  ];
}

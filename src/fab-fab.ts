import { Fab } from '@material/mwc-fab';
import { css, CSSResult, customElement } from 'lit-element';

declare global {
  interface HTMLElementTagNameMap {
    'fab-fab': FabFab;
  }
}

@customElement('fab-fab')
export class FabFab extends Fab {
  exited = true;

  static get styles(): CSSResult {
    return css`
      ${super.styles}

      :host {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
      }

      @media(min-width: 1024px) {
        :host {
          bottom: 1.5rem;
          right: 1.5rem;
        }
      }

      .mdc-fab {
        width: 56px;
        height: 56px;
        transition-duration: 200ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      .mdc-fab--extended {
        width: 178px;
        height: 48px;
      }
    `;
  }

  firstUpdated(): void {
    window.addEventListener('scroll', () => this.onScroll());
    document.addEventListener('DOMContentLoaded', () => this.enter());
  }

  private onScroll(): void {
    this.extended = window.scrollY < 50;
  }

  private enter(): void {
    requestAnimationFrame(() => this.exited = false);
  }
}

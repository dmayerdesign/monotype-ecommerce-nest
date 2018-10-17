import { isPlatformBrowser } from '@angular/common'
import { Component, Inject, PLATFORM_ID } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <div id="container">
    <h1>NgAtlanta 2018 - Universal Workshop</h1>
    <h3>(with Mark Pieszak)</h3>
    <h4 *ngIf="!isBrowser">server</h4>
    <h4 *ngIf="isBrowser">browser</h4>

    <div id="navigation">
      <a routerLink="/">Home</a>
      <a routerLink="/speakers">Speakers</a>
    </div>
    <div id="outlet-wrapper">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: [`
    #navigation { margin: 20px 0; font-weight:bold; font-size:18px; }
    #navigation a { color: #5279a4; margin-right:20px; }
    #outlet-wrapper { padding: 20px; border:1px #ccc solid; }
  `]
})
export class AppComponent {
  public isBrowser: boolean = isPlatformBrowser(this.platformId)

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
}

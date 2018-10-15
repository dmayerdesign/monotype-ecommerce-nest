import { isPlatformBrowser } from '@angular/common'
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'

@Component({
  selector: 'home',
  template: `
    <h2>Hello, world!</h2>
    <div *ngIf="!isBrowser" class='wrapper'>
      I'm displaying because this is server-rendered.
    </div>
    <div *ngIf="isBrowser" class='wrapper'>
      I'm displaying because this is browser-rendered.
    </div>
  `,
  styles: [`
    .container {
        margin: 16px;
        padding: 16px;
        border: 1px black solid;
    }
  `]
})
export class HomeComponent implements OnInit {

  public title: string
  public isBrowser: boolean = isPlatformBrowser(this.platformId)

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  public ngOnInit() {
    this.title = `This is the Homepage!`
  }
}

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'home',
  template: `
    <h2>Hello, world!</h2>
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

  public ngOnInit() {
    this.title = `This is the Homepage!`
  }
}

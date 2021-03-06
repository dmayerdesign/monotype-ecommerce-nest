import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { SpeakersService } from './speakers.service'

@Component({
  selector: 'app-speakers-list',
  template: `
    <h3>Speakers</h3>
    <ul>
      {{ someDate | date }}
      <li *ngFor="let speaker of speakers | async">
        <img [src]="speaker.image"> <span>{{ speaker.name }} - {{ speaker.talk }}</span>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      margin: 16px;
    }
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style-type: none;
      margin-bottom: 8px;
    }
    span {
      margin-left: 8px;
    }
  `]
})
export class SpeakersListComponent implements OnInit {
  public someDate = new Date()

  public speakers: Observable<any[]>

  constructor(
    private speakersService: SpeakersService
  ) {
    this.speakers = this.speakersService.getSpeakers()
  }

  public ngOnInit(): void { }

}

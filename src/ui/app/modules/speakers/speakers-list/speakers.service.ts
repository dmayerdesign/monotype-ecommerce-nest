import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class SpeakersService {
  constructor(
    private http: HttpClient
  ) { }

  public getSpeakers(): Observable<object[]> {
    return this.http.get<object[]>(`/api/speakers`)
  }
}

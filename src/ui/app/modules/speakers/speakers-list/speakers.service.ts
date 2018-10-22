import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class SpeakersService {
  constructor(
    private http: HttpClient
  ) {}

  public getSpeakers() {
    return this.http.get<any[]>(`/api/speakers`)
  }
}
